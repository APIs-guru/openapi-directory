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
var DeletePredictionPathParams = /** @class */ (function (_super) {
    __extends(DeletePredictionPathParams, _super);
    function DeletePredictionPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=projectId" }),
        __metadata("design:type", String)
    ], DeletePredictionPathParams.prototype, "projectId", void 0);
    return DeletePredictionPathParams;
}(SpeakeasyBase));
export { DeletePredictionPathParams };
var DeletePredictionQueryParams = /** @class */ (function (_super) {
    __extends(DeletePredictionQueryParams, _super);
    function DeletePredictionQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=ids" }),
        __metadata("design:type", Array)
    ], DeletePredictionQueryParams.prototype, "ids", void 0);
    return DeletePredictionQueryParams;
}(SpeakeasyBase));
export { DeletePredictionQueryParams };
var DeletePredictionHeaders = /** @class */ (function (_super) {
    __extends(DeletePredictionHeaders, _super);
    function DeletePredictionHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Training-Key" }),
        __metadata("design:type", String)
    ], DeletePredictionHeaders.prototype, "trainingKey", void 0);
    return DeletePredictionHeaders;
}(SpeakeasyBase));
export { DeletePredictionHeaders };
var DeletePredictionRequest = /** @class */ (function (_super) {
    __extends(DeletePredictionRequest, _super);
    function DeletePredictionRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DeletePredictionPathParams)
    ], DeletePredictionRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DeletePredictionQueryParams)
    ], DeletePredictionRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DeletePredictionHeaders)
    ], DeletePredictionRequest.prototype, "headers", void 0);
    return DeletePredictionRequest;
}(SpeakeasyBase));
export { DeletePredictionRequest };
var DeletePredictionResponse = /** @class */ (function (_super) {
    __extends(DeletePredictionResponse, _super);
    function DeletePredictionResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DeletePredictionResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DeletePredictionResponse.prototype, "statusCode", void 0);
    return DeletePredictionResponse;
}(SpeakeasyBase));
export { DeletePredictionResponse };
