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
var GetDatasetsQueryParams = /** @class */ (function (_super) {
    __extends(GetDatasetsQueryParams, _super);
    function GetDatasetsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=app_token" }),
        __metadata("design:type", String)
    ], GetDatasetsQueryParams.prototype, "appToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=dataset_id" }),
        __metadata("design:type", String)
    ], GetDatasetsQueryParams.prototype, "datasetId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=entity_id" }),
        __metadata("design:type", String)
    ], GetDatasetsQueryParams.prototype, "entityId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=limit" }),
        __metadata("design:type", Number)
    ], GetDatasetsQueryParams.prototype, "limit", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=offset" }),
        __metadata("design:type", Number)
    ], GetDatasetsQueryParams.prototype, "offset", void 0);
    return GetDatasetsQueryParams;
}(SpeakeasyBase));
export { GetDatasetsQueryParams };
var GetDatasetsHeaders = /** @class */ (function (_super) {
    __extends(GetDatasetsHeaders, _super);
    function GetDatasetsHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-App-Token" }),
        __metadata("design:type", String)
    ], GetDatasetsHeaders.prototype, "xAppToken", void 0);
    return GetDatasetsHeaders;
}(SpeakeasyBase));
export { GetDatasetsHeaders };
var GetDatasetsRequest = /** @class */ (function (_super) {
    __extends(GetDatasetsRequest, _super);
    function GetDatasetsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetDatasetsQueryParams)
    ], GetDatasetsRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetDatasetsHeaders)
    ], GetDatasetsRequest.prototype, "headers", void 0);
    return GetDatasetsRequest;
}(SpeakeasyBase));
export { GetDatasetsRequest };
var GetDatasetsResponse = /** @class */ (function (_super) {
    __extends(GetDatasetsResponse, _super);
    function GetDatasetsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetDatasetsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetDatasetsResponse.prototype, "statusCode", void 0);
    return GetDatasetsResponse;
}(SpeakeasyBase));
export { GetDatasetsResponse };
