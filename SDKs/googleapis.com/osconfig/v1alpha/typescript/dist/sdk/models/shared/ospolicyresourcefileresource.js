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
import { OsPolicyResourceFile } from "./ospolicyresourcefile";
export var OsPolicyResourceFileResourceStateEnum;
(function (OsPolicyResourceFileResourceStateEnum) {
    OsPolicyResourceFileResourceStateEnum["DesiredStateUnspecified"] = "DESIRED_STATE_UNSPECIFIED";
    OsPolicyResourceFileResourceStateEnum["Present"] = "PRESENT";
    OsPolicyResourceFileResourceStateEnum["Absent"] = "ABSENT";
    OsPolicyResourceFileResourceStateEnum["ContentsMatch"] = "CONTENTS_MATCH";
})(OsPolicyResourceFileResourceStateEnum || (OsPolicyResourceFileResourceStateEnum = {}));
// OsPolicyResourceFileResource
/**
 * A resource that manages the state of a file.
**/
var OsPolicyResourceFileResource = /** @class */ (function (_super) {
    __extends(OsPolicyResourceFileResource, _super);
    function OsPolicyResourceFileResource() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=content" }),
        __metadata("design:type", String)
    ], OsPolicyResourceFileResource.prototype, "content", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=file" }),
        __metadata("design:type", OsPolicyResourceFile)
    ], OsPolicyResourceFileResource.prototype, "file", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=path" }),
        __metadata("design:type", String)
    ], OsPolicyResourceFileResource.prototype, "path", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=permissions" }),
        __metadata("design:type", String)
    ], OsPolicyResourceFileResource.prototype, "permissions", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=state" }),
        __metadata("design:type", String)
    ], OsPolicyResourceFileResource.prototype, "state", void 0);
    return OsPolicyResourceFileResource;
}(SpeakeasyBase));
export { OsPolicyResourceFileResource };
