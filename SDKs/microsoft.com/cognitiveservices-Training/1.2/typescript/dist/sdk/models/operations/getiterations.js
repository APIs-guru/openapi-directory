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
var GetIterationsPathParams = /** @class */ (function (_super) {
    __extends(GetIterationsPathParams, _super);
    function GetIterationsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=projectId" }),
        __metadata("design:type", String)
    ], GetIterationsPathParams.prototype, "projectId", void 0);
    return GetIterationsPathParams;
}(SpeakeasyBase));
export { GetIterationsPathParams };
var GetIterationsHeaders = /** @class */ (function (_super) {
    __extends(GetIterationsHeaders, _super);
    function GetIterationsHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Training-Key" }),
        __metadata("design:type", String)
    ], GetIterationsHeaders.prototype, "trainingKey", void 0);
    return GetIterationsHeaders;
}(SpeakeasyBase));
export { GetIterationsHeaders };
var GetIterationsRequest = /** @class */ (function (_super) {
    __extends(GetIterationsRequest, _super);
    function GetIterationsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetIterationsPathParams)
    ], GetIterationsRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetIterationsHeaders)
    ], GetIterationsRequest.prototype, "headers", void 0);
    return GetIterationsRequest;
}(SpeakeasyBase));
export { GetIterationsRequest };
var GetIterationsResponse = /** @class */ (function (_super) {
    __extends(GetIterationsResponse, _super);
    function GetIterationsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], GetIterationsResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetIterationsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata({ elemType: shared.Iteration }),
        __metadata("design:type", Array)
    ], GetIterationsResponse.prototype, "iterations", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetIterationsResponse.prototype, "statusCode", void 0);
    return GetIterationsResponse;
}(SpeakeasyBase));
export { GetIterationsResponse };
