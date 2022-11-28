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
var GetV1WorkgroupsWorkgroupIdSpecTypesSpecTypeIdSpecTypeFieldsPathParams = /** @class */ (function (_super) {
    __extends(GetV1WorkgroupsWorkgroupIdSpecTypesSpecTypeIdSpecTypeFieldsPathParams, _super);
    function GetV1WorkgroupsWorkgroupIdSpecTypesSpecTypeIdSpecTypeFieldsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=spec_type_id" }),
        __metadata("design:type", String)
    ], GetV1WorkgroupsWorkgroupIdSpecTypesSpecTypeIdSpecTypeFieldsPathParams.prototype, "specTypeId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=workgroup_id" }),
        __metadata("design:type", String)
    ], GetV1WorkgroupsWorkgroupIdSpecTypesSpecTypeIdSpecTypeFieldsPathParams.prototype, "workgroupId", void 0);
    return GetV1WorkgroupsWorkgroupIdSpecTypesSpecTypeIdSpecTypeFieldsPathParams;
}(SpeakeasyBase));
export { GetV1WorkgroupsWorkgroupIdSpecTypesSpecTypeIdSpecTypeFieldsPathParams };
var GetV1WorkgroupsWorkgroupIdSpecTypesSpecTypeIdSpecTypeFieldsRequest = /** @class */ (function (_super) {
    __extends(GetV1WorkgroupsWorkgroupIdSpecTypesSpecTypeIdSpecTypeFieldsRequest, _super);
    function GetV1WorkgroupsWorkgroupIdSpecTypesSpecTypeIdSpecTypeFieldsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetV1WorkgroupsWorkgroupIdSpecTypesSpecTypeIdSpecTypeFieldsPathParams)
    ], GetV1WorkgroupsWorkgroupIdSpecTypesSpecTypeIdSpecTypeFieldsRequest.prototype, "pathParams", void 0);
    return GetV1WorkgroupsWorkgroupIdSpecTypesSpecTypeIdSpecTypeFieldsRequest;
}(SpeakeasyBase));
export { GetV1WorkgroupsWorkgroupIdSpecTypesSpecTypeIdSpecTypeFieldsRequest };
var GetV1WorkgroupsWorkgroupIdSpecTypesSpecTypeIdSpecTypeFieldsResponse = /** @class */ (function (_super) {
    __extends(GetV1WorkgroupsWorkgroupIdSpecTypesSpecTypeIdSpecTypeFieldsResponse, _super);
    function GetV1WorkgroupsWorkgroupIdSpecTypesSpecTypeIdSpecTypeFieldsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], GetV1WorkgroupsWorkgroupIdSpecTypesSpecTypeIdSpecTypeFieldsResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetV1WorkgroupsWorkgroupIdSpecTypesSpecTypeIdSpecTypeFieldsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], GetV1WorkgroupsWorkgroupIdSpecTypesSpecTypeIdSpecTypeFieldsResponse.prototype, "httpStatusVo", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], GetV1WorkgroupsWorkgroupIdSpecTypesSpecTypeIdSpecTypeFieldsResponse.prototype, "propertyParamListVo", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetV1WorkgroupsWorkgroupIdSpecTypesSpecTypeIdSpecTypeFieldsResponse.prototype, "statusCode", void 0);
    return GetV1WorkgroupsWorkgroupIdSpecTypesSpecTypeIdSpecTypeFieldsResponse;
}(SpeakeasyBase));
export { GetV1WorkgroupsWorkgroupIdSpecTypesSpecTypeIdSpecTypeFieldsResponse };
