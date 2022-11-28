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
var ExportIterationPathParams = /** @class */ (function (_super) {
    __extends(ExportIterationPathParams, _super);
    function ExportIterationPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=iterationId" }),
        __metadata("design:type", String)
    ], ExportIterationPathParams.prototype, "iterationId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=projectId" }),
        __metadata("design:type", String)
    ], ExportIterationPathParams.prototype, "projectId", void 0);
    return ExportIterationPathParams;
}(SpeakeasyBase));
export { ExportIterationPathParams };
var ExportIterationQueryParams = /** @class */ (function (_super) {
    __extends(ExportIterationQueryParams, _super);
    function ExportIterationQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=flavor" }),
        __metadata("design:type", String)
    ], ExportIterationQueryParams.prototype, "flavor", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=platform" }),
        __metadata("design:type", String)
    ], ExportIterationQueryParams.prototype, "platform", void 0);
    return ExportIterationQueryParams;
}(SpeakeasyBase));
export { ExportIterationQueryParams };
var ExportIterationHeaders = /** @class */ (function (_super) {
    __extends(ExportIterationHeaders, _super);
    function ExportIterationHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Training-Key" }),
        __metadata("design:type", String)
    ], ExportIterationHeaders.prototype, "trainingKey", void 0);
    return ExportIterationHeaders;
}(SpeakeasyBase));
export { ExportIterationHeaders };
var ExportIterationRequest = /** @class */ (function (_super) {
    __extends(ExportIterationRequest, _super);
    function ExportIterationRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ExportIterationPathParams)
    ], ExportIterationRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ExportIterationQueryParams)
    ], ExportIterationRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ExportIterationHeaders)
    ], ExportIterationRequest.prototype, "headers", void 0);
    return ExportIterationRequest;
}(SpeakeasyBase));
export { ExportIterationRequest };
var ExportIterationResponse = /** @class */ (function (_super) {
    __extends(ExportIterationResponse, _super);
    function ExportIterationResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], ExportIterationResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ExportIterationResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Export)
    ], ExportIterationResponse.prototype, "export", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ExportIterationResponse.prototype, "statusCode", void 0);
    return ExportIterationResponse;
}(SpeakeasyBase));
export { ExportIterationResponse };
