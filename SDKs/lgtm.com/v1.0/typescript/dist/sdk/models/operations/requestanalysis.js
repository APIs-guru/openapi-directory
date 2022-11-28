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
import * as shared from "../shared";
var RequestAnalysisPathParams = /** @class */ (function (_super) {
    __extends(RequestAnalysisPathParams, _super);
    function RequestAnalysisPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=project-id" }),
        __metadata("design:type", Number)
    ], RequestAnalysisPathParams.prototype, "projectId", void 0);
    return RequestAnalysisPathParams;
}(SpeakeasyBase));
export { RequestAnalysisPathParams };
var RequestAnalysisQueryParams = /** @class */ (function (_super) {
    __extends(RequestAnalysisQueryParams, _super);
    function RequestAnalysisQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=commit" }),
        __metadata("design:type", String)
    ], RequestAnalysisQueryParams.prototype, "commit", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=language" }),
        __metadata("design:type", Array)
    ], RequestAnalysisQueryParams.prototype, "language", void 0);
    return RequestAnalysisQueryParams;
}(SpeakeasyBase));
export { RequestAnalysisQueryParams };
var RequestAnalysisSecurity = /** @class */ (function (_super) {
    __extends(RequestAnalysisSecurity, _super);
    function RequestAnalysisSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" }),
        __metadata("design:type", shared.SchemeAccessToken)
    ], RequestAnalysisSecurity.prototype, "accessToken", void 0);
    return RequestAnalysisSecurity;
}(SpeakeasyBase));
export { RequestAnalysisSecurity };
var RequestAnalysisRequest = /** @class */ (function (_super) {
    __extends(RequestAnalysisRequest, _super);
    function RequestAnalysisRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", RequestAnalysisPathParams)
    ], RequestAnalysisRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", RequestAnalysisQueryParams)
    ], RequestAnalysisRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", RequestAnalysisSecurity)
    ], RequestAnalysisRequest.prototype, "security", void 0);
    return RequestAnalysisRequest;
}(SpeakeasyBase));
export { RequestAnalysisRequest };
var RequestAnalysisResponse = /** @class */ (function (_super) {
    __extends(RequestAnalysisResponse, _super);
    function RequestAnalysisResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], RequestAnalysisResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], RequestAnalysisResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Operation)
    ], RequestAnalysisResponse.prototype, "operation", void 0);
    return RequestAnalysisResponse;
}(SpeakeasyBase));
export { RequestAnalysisResponse };
