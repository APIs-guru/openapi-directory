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
var DeleteImageRegionsPathParams = /** @class */ (function (_super) {
    __extends(DeleteImageRegionsPathParams, _super);
    function DeleteImageRegionsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=projectId" }),
        __metadata("design:type", String)
    ], DeleteImageRegionsPathParams.prototype, "projectId", void 0);
    return DeleteImageRegionsPathParams;
}(SpeakeasyBase));
export { DeleteImageRegionsPathParams };
var DeleteImageRegionsQueryParams = /** @class */ (function (_super) {
    __extends(DeleteImageRegionsQueryParams, _super);
    function DeleteImageRegionsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=regionIds" }),
        __metadata("design:type", Array)
    ], DeleteImageRegionsQueryParams.prototype, "regionIds", void 0);
    return DeleteImageRegionsQueryParams;
}(SpeakeasyBase));
export { DeleteImageRegionsQueryParams };
var DeleteImageRegionsHeaders = /** @class */ (function (_super) {
    __extends(DeleteImageRegionsHeaders, _super);
    function DeleteImageRegionsHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Training-Key" }),
        __metadata("design:type", String)
    ], DeleteImageRegionsHeaders.prototype, "trainingKey", void 0);
    return DeleteImageRegionsHeaders;
}(SpeakeasyBase));
export { DeleteImageRegionsHeaders };
var DeleteImageRegionsRequest = /** @class */ (function (_super) {
    __extends(DeleteImageRegionsRequest, _super);
    function DeleteImageRegionsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DeleteImageRegionsPathParams)
    ], DeleteImageRegionsRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DeleteImageRegionsQueryParams)
    ], DeleteImageRegionsRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DeleteImageRegionsHeaders)
    ], DeleteImageRegionsRequest.prototype, "headers", void 0);
    return DeleteImageRegionsRequest;
}(SpeakeasyBase));
export { DeleteImageRegionsRequest };
var DeleteImageRegionsResponse = /** @class */ (function (_super) {
    __extends(DeleteImageRegionsResponse, _super);
    function DeleteImageRegionsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DeleteImageRegionsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DeleteImageRegionsResponse.prototype, "statusCode", void 0);
    return DeleteImageRegionsResponse;
}(SpeakeasyBase));
export { DeleteImageRegionsResponse };
