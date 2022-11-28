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
import { FieldMetadataInput } from "./fieldmetadata";
import { FieldMetadata } from "./fieldmetadata";
export var MiscKeywordTypeEnum;
(function (MiscKeywordTypeEnum) {
    MiscKeywordTypeEnum["TypeUnspecified"] = "TYPE_UNSPECIFIED";
    MiscKeywordTypeEnum["OutlookBillingInformation"] = "OUTLOOK_BILLING_INFORMATION";
    MiscKeywordTypeEnum["OutlookDirectoryServer"] = "OUTLOOK_DIRECTORY_SERVER";
    MiscKeywordTypeEnum["OutlookKeyword"] = "OUTLOOK_KEYWORD";
    MiscKeywordTypeEnum["OutlookMileage"] = "OUTLOOK_MILEAGE";
    MiscKeywordTypeEnum["OutlookPriority"] = "OUTLOOK_PRIORITY";
    MiscKeywordTypeEnum["OutlookSensitivity"] = "OUTLOOK_SENSITIVITY";
    MiscKeywordTypeEnum["OutlookSubject"] = "OUTLOOK_SUBJECT";
    MiscKeywordTypeEnum["OutlookUser"] = "OUTLOOK_USER";
    MiscKeywordTypeEnum["Home"] = "HOME";
    MiscKeywordTypeEnum["Work"] = "WORK";
    MiscKeywordTypeEnum["Other"] = "OTHER";
})(MiscKeywordTypeEnum || (MiscKeywordTypeEnum = {}));
// MiscKeywordInput
/**
 * A person's miscellaneous keyword.
**/
var MiscKeywordInput = /** @class */ (function (_super) {
    __extends(MiscKeywordInput, _super);
    function MiscKeywordInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=metadata" }),
        __metadata("design:type", FieldMetadataInput)
    ], MiscKeywordInput.prototype, "metadata", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], MiscKeywordInput.prototype, "type", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=value" }),
        __metadata("design:type", String)
    ], MiscKeywordInput.prototype, "value", void 0);
    return MiscKeywordInput;
}(SpeakeasyBase));
export { MiscKeywordInput };
// MiscKeyword
/**
 * A person's miscellaneous keyword.
**/
var MiscKeyword = /** @class */ (function (_super) {
    __extends(MiscKeyword, _super);
    function MiscKeyword() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=formattedType" }),
        __metadata("design:type", String)
    ], MiscKeyword.prototype, "formattedType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=metadata" }),
        __metadata("design:type", FieldMetadata)
    ], MiscKeyword.prototype, "metadata", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], MiscKeyword.prototype, "type", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=value" }),
        __metadata("design:type", String)
    ], MiscKeyword.prototype, "value", void 0);
    return MiscKeyword;
}(SpeakeasyBase));
export { MiscKeyword };
