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
var UpdateIterationPathParams = /** @class */ (function (_super) {
    __extends(UpdateIterationPathParams, _super);
    function UpdateIterationPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=iterationId" }),
        __metadata("design:type", String)
    ], UpdateIterationPathParams.prototype, "iterationId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=projectId" }),
        __metadata("design:type", String)
    ], UpdateIterationPathParams.prototype, "projectId", void 0);
    return UpdateIterationPathParams;
}(SpeakeasyBase));
export { UpdateIterationPathParams };
var UpdateIterationHeaders = /** @class */ (function (_super) {
    __extends(UpdateIterationHeaders, _super);
    function UpdateIterationHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Training-Key" }),
        __metadata("design:type", String)
    ], UpdateIterationHeaders.prototype, "trainingKey", void 0);
    return UpdateIterationHeaders;
}(SpeakeasyBase));
export { UpdateIterationHeaders };
var UpdateIterationRequestsInput = /** @class */ (function (_super) {
    __extends(UpdateIterationRequestsInput, _super);
    function UpdateIterationRequestsInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/xml" }),
        __metadata("design:type", Uint8Array)
    ], UpdateIterationRequestsInput.prototype, "applicationXml", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.IterationInput)
    ], UpdateIterationRequestsInput.prototype, "iteration", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" }),
        __metadata("design:type", shared.IterationInput)
    ], UpdateIterationRequestsInput.prototype, "iteration1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=text/json" }),
        __metadata("design:type", shared.IterationInput)
    ], UpdateIterationRequestsInput.prototype, "iteration2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=text/xml" }),
        __metadata("design:type", Uint8Array)
    ], UpdateIterationRequestsInput.prototype, "textXml", void 0);
    return UpdateIterationRequestsInput;
}(SpeakeasyBase));
export { UpdateIterationRequestsInput };
var UpdateIterationRequest = /** @class */ (function (_super) {
    __extends(UpdateIterationRequest, _super);
    function UpdateIterationRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UpdateIterationPathParams)
    ], UpdateIterationRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UpdateIterationHeaders)
    ], UpdateIterationRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UpdateIterationRequestsInput)
    ], UpdateIterationRequest.prototype, "request", void 0);
    return UpdateIterationRequest;
}(SpeakeasyBase));
export { UpdateIterationRequest };
var UpdateIterationResponse = /** @class */ (function (_super) {
    __extends(UpdateIterationResponse, _super);
    function UpdateIterationResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], UpdateIterationResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], UpdateIterationResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Iteration)
    ], UpdateIterationResponse.prototype, "iteration", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], UpdateIterationResponse.prototype, "statusCode", void 0);
    return UpdateIterationResponse;
}(SpeakeasyBase));
export { UpdateIterationResponse };
