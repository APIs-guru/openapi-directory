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
var GetResourcesCampaignsIdMediaJsonPathParams = /** @class */ (function (_super) {
    __extends(GetResourcesCampaignsIdMediaJsonPathParams, _super);
    function GetResourcesCampaignsIdMediaJsonPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", Number)
    ], GetResourcesCampaignsIdMediaJsonPathParams.prototype, "id", void 0);
    return GetResourcesCampaignsIdMediaJsonPathParams;
}(SpeakeasyBase));
export { GetResourcesCampaignsIdMediaJsonPathParams };
var GetResourcesCampaignsIdMediaJsonQueryParams = /** @class */ (function (_super) {
    __extends(GetResourcesCampaignsIdMediaJsonQueryParams, _super);
    function GetResourcesCampaignsIdMediaJsonQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=max" }),
        __metadata("design:type", Number)
    ], GetResourcesCampaignsIdMediaJsonQueryParams.prototype, "max", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=offset" }),
        __metadata("design:type", Number)
    ], GetResourcesCampaignsIdMediaJsonQueryParams.prototype, "offset", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=sort" }),
        __metadata("design:type", String)
    ], GetResourcesCampaignsIdMediaJsonQueryParams.prototype, "sort", void 0);
    return GetResourcesCampaignsIdMediaJsonQueryParams;
}(SpeakeasyBase));
export { GetResourcesCampaignsIdMediaJsonQueryParams };
var GetResourcesCampaignsIdMediaJsonRequest = /** @class */ (function (_super) {
    __extends(GetResourcesCampaignsIdMediaJsonRequest, _super);
    function GetResourcesCampaignsIdMediaJsonRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetResourcesCampaignsIdMediaJsonPathParams)
    ], GetResourcesCampaignsIdMediaJsonRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetResourcesCampaignsIdMediaJsonQueryParams)
    ], GetResourcesCampaignsIdMediaJsonRequest.prototype, "queryParams", void 0);
    return GetResourcesCampaignsIdMediaJsonRequest;
}(SpeakeasyBase));
export { GetResourcesCampaignsIdMediaJsonRequest };
var GetResourcesCampaignsIdMediaJsonResponse = /** @class */ (function (_super) {
    __extends(GetResourcesCampaignsIdMediaJsonResponse, _super);
    function GetResourcesCampaignsIdMediaJsonResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetResourcesCampaignsIdMediaJsonResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.MediaItemWrapped)
    ], GetResourcesCampaignsIdMediaJsonResponse.prototype, "mediaItemWrapped", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetResourcesCampaignsIdMediaJsonResponse.prototype, "statusCode", void 0);
    return GetResourcesCampaignsIdMediaJsonResponse;
}(SpeakeasyBase));
export { GetResourcesCampaignsIdMediaJsonResponse };
