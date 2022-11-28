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
var PutV1WorkgroupsWorkgroupIdProjectsProjectIdSpecsSpecIdPathParams = /** @class */ (function (_super) {
    __extends(PutV1WorkgroupsWorkgroupIdProjectsProjectIdSpecsSpecIdPathParams, _super);
    function PutV1WorkgroupsWorkgroupIdProjectsProjectIdSpecsSpecIdPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=project_id" }),
        __metadata("design:type", String)
    ], PutV1WorkgroupsWorkgroupIdProjectsProjectIdSpecsSpecIdPathParams.prototype, "projectId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=spec_id" }),
        __metadata("design:type", String)
    ], PutV1WorkgroupsWorkgroupIdProjectsProjectIdSpecsSpecIdPathParams.prototype, "specId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=workgroup_id" }),
        __metadata("design:type", String)
    ], PutV1WorkgroupsWorkgroupIdProjectsProjectIdSpecsSpecIdPathParams.prototype, "workgroupId", void 0);
    return PutV1WorkgroupsWorkgroupIdProjectsProjectIdSpecsSpecIdPathParams;
}(SpeakeasyBase));
export { PutV1WorkgroupsWorkgroupIdProjectsProjectIdSpecsSpecIdPathParams };
var PutV1WorkgroupsWorkgroupIdProjectsProjectIdSpecsSpecIdRequests = /** @class */ (function (_super) {
    __extends(PutV1WorkgroupsWorkgroupIdProjectsProjectIdSpecsSpecIdRequests, _super);
    function PutV1WorkgroupsWorkgroupIdProjectsProjectIdSpecsSpecIdRequests() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/xml" }),
        __metadata("design:type", Uint8Array)
    ], PutV1WorkgroupsWorkgroupIdProjectsProjectIdSpecsSpecIdRequests.prototype, "applicationXml", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/x-yaml" }),
        __metadata("design:type", Uint8Array)
    ], PutV1WorkgroupsWorkgroupIdProjectsProjectIdSpecsSpecIdRequests.prototype, "applicationXYaml", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", Object)
    ], PutV1WorkgroupsWorkgroupIdProjectsProjectIdSpecsSpecIdRequests.prototype, "specUpdatePersistVo", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/x-json-smile" }),
        __metadata("design:type", Object)
    ], PutV1WorkgroupsWorkgroupIdProjectsProjectIdSpecsSpecIdRequests.prototype, "specUpdatePersistVo1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=text/csv" }),
        __metadata("design:type", Uint8Array)
    ], PutV1WorkgroupsWorkgroupIdProjectsProjectIdSpecsSpecIdRequests.prototype, "textCsv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=text/xml" }),
        __metadata("design:type", Uint8Array)
    ], PutV1WorkgroupsWorkgroupIdProjectsProjectIdSpecsSpecIdRequests.prototype, "textXml", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=text/x-yaml" }),
        __metadata("design:type", Uint8Array)
    ], PutV1WorkgroupsWorkgroupIdProjectsProjectIdSpecsSpecIdRequests.prototype, "textXYaml", void 0);
    return PutV1WorkgroupsWorkgroupIdProjectsProjectIdSpecsSpecIdRequests;
}(SpeakeasyBase));
export { PutV1WorkgroupsWorkgroupIdProjectsProjectIdSpecsSpecIdRequests };
var PutV1WorkgroupsWorkgroupIdProjectsProjectIdSpecsSpecIdRequest = /** @class */ (function (_super) {
    __extends(PutV1WorkgroupsWorkgroupIdProjectsProjectIdSpecsSpecIdRequest, _super);
    function PutV1WorkgroupsWorkgroupIdProjectsProjectIdSpecsSpecIdRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PutV1WorkgroupsWorkgroupIdProjectsProjectIdSpecsSpecIdPathParams)
    ], PutV1WorkgroupsWorkgroupIdProjectsProjectIdSpecsSpecIdRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PutV1WorkgroupsWorkgroupIdProjectsProjectIdSpecsSpecIdRequests)
    ], PutV1WorkgroupsWorkgroupIdProjectsProjectIdSpecsSpecIdRequest.prototype, "request", void 0);
    return PutV1WorkgroupsWorkgroupIdProjectsProjectIdSpecsSpecIdRequest;
}(SpeakeasyBase));
export { PutV1WorkgroupsWorkgroupIdProjectsProjectIdSpecsSpecIdRequest };
var PutV1WorkgroupsWorkgroupIdProjectsProjectIdSpecsSpecIdResponse = /** @class */ (function (_super) {
    __extends(PutV1WorkgroupsWorkgroupIdProjectsProjectIdSpecsSpecIdResponse, _super);
    function PutV1WorkgroupsWorkgroupIdProjectsProjectIdSpecsSpecIdResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], PutV1WorkgroupsWorkgroupIdProjectsProjectIdSpecsSpecIdResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PutV1WorkgroupsWorkgroupIdProjectsProjectIdSpecsSpecIdResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], PutV1WorkgroupsWorkgroupIdProjectsProjectIdSpecsSpecIdResponse.prototype, "httpStatusVo", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], PutV1WorkgroupsWorkgroupIdProjectsProjectIdSpecsSpecIdResponse.prototype, "specHttpStatusVo", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PutV1WorkgroupsWorkgroupIdProjectsProjectIdSpecsSpecIdResponse.prototype, "statusCode", void 0);
    return PutV1WorkgroupsWorkgroupIdProjectsProjectIdSpecsSpecIdResponse;
}(SpeakeasyBase));
export { PutV1WorkgroupsWorkgroupIdProjectsProjectIdSpecsSpecIdResponse };
