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
import { ProfileMetadata } from "./profilemetadata";
export var SourceTypeEnum;
(function (SourceTypeEnum) {
    SourceTypeEnum["SourceTypeUnspecified"] = "SOURCE_TYPE_UNSPECIFIED";
    SourceTypeEnum["Account"] = "ACCOUNT";
    SourceTypeEnum["Profile"] = "PROFILE";
    SourceTypeEnum["DomainProfile"] = "DOMAIN_PROFILE";
    SourceTypeEnum["Contact"] = "CONTACT";
    SourceTypeEnum["OtherContact"] = "OTHER_CONTACT";
    SourceTypeEnum["DomainContact"] = "DOMAIN_CONTACT";
})(SourceTypeEnum || (SourceTypeEnum = {}));
// Source
/**
 * The source of a field.
**/
var Source = /** @class */ (function (_super) {
    __extends(Source, _super);
    function Source() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=etag" }),
        __metadata("design:type", String)
    ], Source.prototype, "etag", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], Source.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=profileMetadata" }),
        __metadata("design:type", ProfileMetadata)
    ], Source.prototype, "profileMetadata", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], Source.prototype, "type", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=updateTime" }),
        __metadata("design:type", String)
    ], Source.prototype, "updateTime", void 0);
    return Source;
}(SpeakeasyBase));
export { Source };
// SourceInput
/**
 * The source of a field.
**/
var SourceInput = /** @class */ (function (_super) {
    __extends(SourceInput, _super);
    function SourceInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=etag" }),
        __metadata("design:type", String)
    ], SourceInput.prototype, "etag", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], SourceInput.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], SourceInput.prototype, "type", void 0);
    return SourceInput;
}(SpeakeasyBase));
export { SourceInput };
