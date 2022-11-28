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
var GetResourcesMediaSearchResultsJsonQueryParams = /** @class */ (function (_super) {
    __extends(GetResourcesMediaSearchResultsJsonQueryParams, _super);
    function GetResourcesMediaSearchResultsJsonQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=max" }),
        __metadata("design:type", Number)
    ], GetResourcesMediaSearchResultsJsonQueryParams.prototype, "max", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=offset" }),
        __metadata("design:type", Number)
    ], GetResourcesMediaSearchResultsJsonQueryParams.prototype, "offset", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=q" }),
        __metadata("design:type", String)
    ], GetResourcesMediaSearchResultsJsonQueryParams.prototype, "q", void 0);
    return GetResourcesMediaSearchResultsJsonQueryParams;
}(SpeakeasyBase));
export { GetResourcesMediaSearchResultsJsonQueryParams };
var GetResourcesMediaSearchResultsJsonRequest = /** @class */ (function (_super) {
    __extends(GetResourcesMediaSearchResultsJsonRequest, _super);
    function GetResourcesMediaSearchResultsJsonRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetResourcesMediaSearchResultsJsonQueryParams)
    ], GetResourcesMediaSearchResultsJsonRequest.prototype, "queryParams", void 0);
    return GetResourcesMediaSearchResultsJsonRequest;
}(SpeakeasyBase));
export { GetResourcesMediaSearchResultsJsonRequest };
var GetResourcesMediaSearchResultsJsonResponse = /** @class */ (function (_super) {
    __extends(GetResourcesMediaSearchResultsJsonResponse, _super);
    function GetResourcesMediaSearchResultsJsonResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetResourcesMediaSearchResultsJsonResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata({ elemType: shared.MediaItemWrapped }),
        __metadata("design:type", Array)
    ], GetResourcesMediaSearchResultsJsonResponse.prototype, "mediaItemWrappeds", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetResourcesMediaSearchResultsJsonResponse.prototype, "statusCode", void 0);
    return GetResourcesMediaSearchResultsJsonResponse;
}(SpeakeasyBase));
export { GetResourcesMediaSearchResultsJsonResponse };
