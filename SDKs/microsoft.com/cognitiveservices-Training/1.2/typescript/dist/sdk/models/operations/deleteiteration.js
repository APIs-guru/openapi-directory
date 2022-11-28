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
var DeleteIterationPathParams = /** @class */ (function (_super) {
    __extends(DeleteIterationPathParams, _super);
    function DeleteIterationPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=iterationId" }),
        __metadata("design:type", String)
    ], DeleteIterationPathParams.prototype, "iterationId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=projectId" }),
        __metadata("design:type", String)
    ], DeleteIterationPathParams.prototype, "projectId", void 0);
    return DeleteIterationPathParams;
}(SpeakeasyBase));
export { DeleteIterationPathParams };
var DeleteIterationHeaders = /** @class */ (function (_super) {
    __extends(DeleteIterationHeaders, _super);
    function DeleteIterationHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Training-Key" }),
        __metadata("design:type", String)
    ], DeleteIterationHeaders.prototype, "trainingKey", void 0);
    return DeleteIterationHeaders;
}(SpeakeasyBase));
export { DeleteIterationHeaders };
var DeleteIterationRequest = /** @class */ (function (_super) {
    __extends(DeleteIterationRequest, _super);
    function DeleteIterationRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DeleteIterationPathParams)
    ], DeleteIterationRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DeleteIterationHeaders)
    ], DeleteIterationRequest.prototype, "headers", void 0);
    return DeleteIterationRequest;
}(SpeakeasyBase));
export { DeleteIterationRequest };
var DeleteIterationResponse = /** @class */ (function (_super) {
    __extends(DeleteIterationResponse, _super);
    function DeleteIterationResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DeleteIterationResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DeleteIterationResponse.prototype, "statusCode", void 0);
    return DeleteIterationResponse;
}(SpeakeasyBase));
export { DeleteIterationResponse };
