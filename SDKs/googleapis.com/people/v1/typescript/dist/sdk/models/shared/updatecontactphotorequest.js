var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
export var UpdateContactPhotoRequestSourcesEnum;
(function (UpdateContactPhotoRequestSourcesEnum) {
    UpdateContactPhotoRequestSourcesEnum["ReadSourceTypeUnspecified"] = "READ_SOURCE_TYPE_UNSPECIFIED";
    UpdateContactPhotoRequestSourcesEnum["ReadSourceTypeProfile"] = "READ_SOURCE_TYPE_PROFILE";
    UpdateContactPhotoRequestSourcesEnum["ReadSourceTypeContact"] = "READ_SOURCE_TYPE_CONTACT";
    UpdateContactPhotoRequestSourcesEnum["ReadSourceTypeDomainContact"] = "READ_SOURCE_TYPE_DOMAIN_CONTACT";
})(UpdateContactPhotoRequestSourcesEnum || (UpdateContactPhotoRequestSourcesEnum = {}));
// UpdateContactPhotoRequest
/**
 * A request to update an existing contact's photo. All requests must have a valid photo format: JPEG or PNG.
**/
var UpdateContactPhotoRequest = /** @class */ (function (_super) {
    __extends(UpdateContactPhotoRequest, _super);
    function UpdateContactPhotoRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=personFields" }),
        __metadata("design:type", String)
    ], UpdateContactPhotoRequest.prototype, "personFields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=photoBytes" }),
        __metadata("design:type", String)
    ], UpdateContactPhotoRequest.prototype, "photoBytes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sources" }),
        __metadata("design:type", Array)
    ], UpdateContactPhotoRequest.prototype, "sources", void 0);
    return UpdateContactPhotoRequest;
}(SpeakeasyBase));
export { UpdateContactPhotoRequest };
