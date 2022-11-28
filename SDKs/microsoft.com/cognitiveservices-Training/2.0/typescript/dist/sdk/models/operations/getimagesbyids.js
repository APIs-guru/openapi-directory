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
var GetImagesByIdsPathParams = /** @class */ (function (_super) {
    __extends(GetImagesByIdsPathParams, _super);
    function GetImagesByIdsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=projectId" }),
        __metadata("design:type", String)
    ], GetImagesByIdsPathParams.prototype, "projectId", void 0);
    return GetImagesByIdsPathParams;
}(SpeakeasyBase));
export { GetImagesByIdsPathParams };
var GetImagesByIdsQueryParams = /** @class */ (function (_super) {
    __extends(GetImagesByIdsQueryParams, _super);
    function GetImagesByIdsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=imageIds" }),
        __metadata("design:type", Array)
    ], GetImagesByIdsQueryParams.prototype, "imageIds", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=iterationId" }),
        __metadata("design:type", String)
    ], GetImagesByIdsQueryParams.prototype, "iterationId", void 0);
    return GetImagesByIdsQueryParams;
}(SpeakeasyBase));
export { GetImagesByIdsQueryParams };
var GetImagesByIdsHeaders = /** @class */ (function (_super) {
    __extends(GetImagesByIdsHeaders, _super);
    function GetImagesByIdsHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Training-Key" }),
        __metadata("design:type", String)
    ], GetImagesByIdsHeaders.prototype, "trainingKey", void 0);
    return GetImagesByIdsHeaders;
}(SpeakeasyBase));
export { GetImagesByIdsHeaders };
var GetImagesByIdsRequest = /** @class */ (function (_super) {
    __extends(GetImagesByIdsRequest, _super);
    function GetImagesByIdsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetImagesByIdsPathParams)
    ], GetImagesByIdsRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetImagesByIdsQueryParams)
    ], GetImagesByIdsRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetImagesByIdsHeaders)
    ], GetImagesByIdsRequest.prototype, "headers", void 0);
    return GetImagesByIdsRequest;
}(SpeakeasyBase));
export { GetImagesByIdsRequest };
var GetImagesByIdsResponse = /** @class */ (function (_super) {
    __extends(GetImagesByIdsResponse, _super);
    function GetImagesByIdsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], GetImagesByIdsResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetImagesByIdsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata({ elemType: shared.Image }),
        __metadata("design:type", Array)
    ], GetImagesByIdsResponse.prototype, "images", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetImagesByIdsResponse.prototype, "statusCode", void 0);
    return GetImagesByIdsResponse;
}(SpeakeasyBase));
export { GetImagesByIdsResponse };
