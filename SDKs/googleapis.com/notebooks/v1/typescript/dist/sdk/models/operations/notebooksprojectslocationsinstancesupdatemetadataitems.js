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
var NotebooksProjectsLocationsInstancesUpdateMetadataItemsPathParams = /** @class */ (function (_super) {
    __extends(NotebooksProjectsLocationsInstancesUpdateMetadataItemsPathParams, _super);
    function NotebooksProjectsLocationsInstancesUpdateMetadataItemsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=name" }),
        __metadata("design:type", String)
    ], NotebooksProjectsLocationsInstancesUpdateMetadataItemsPathParams.prototype, "name", void 0);
    return NotebooksProjectsLocationsInstancesUpdateMetadataItemsPathParams;
}(SpeakeasyBase));
export { NotebooksProjectsLocationsInstancesUpdateMetadataItemsPathParams };
var NotebooksProjectsLocationsInstancesUpdateMetadataItemsQueryParams = /** @class */ (function (_super) {
    __extends(NotebooksProjectsLocationsInstancesUpdateMetadataItemsQueryParams, _super);
    function NotebooksProjectsLocationsInstancesUpdateMetadataItemsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], NotebooksProjectsLocationsInstancesUpdateMetadataItemsQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], NotebooksProjectsLocationsInstancesUpdateMetadataItemsQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], NotebooksProjectsLocationsInstancesUpdateMetadataItemsQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], NotebooksProjectsLocationsInstancesUpdateMetadataItemsQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], NotebooksProjectsLocationsInstancesUpdateMetadataItemsQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], NotebooksProjectsLocationsInstancesUpdateMetadataItemsQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], NotebooksProjectsLocationsInstancesUpdateMetadataItemsQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], NotebooksProjectsLocationsInstancesUpdateMetadataItemsQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], NotebooksProjectsLocationsInstancesUpdateMetadataItemsQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], NotebooksProjectsLocationsInstancesUpdateMetadataItemsQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], NotebooksProjectsLocationsInstancesUpdateMetadataItemsQueryParams.prototype, "uploadProtocol", void 0);
    return NotebooksProjectsLocationsInstancesUpdateMetadataItemsQueryParams;
}(SpeakeasyBase));
export { NotebooksProjectsLocationsInstancesUpdateMetadataItemsQueryParams };
var NotebooksProjectsLocationsInstancesUpdateMetadataItemsSecurity = /** @class */ (function (_super) {
    __extends(NotebooksProjectsLocationsInstancesUpdateMetadataItemsSecurity, _super);
    function NotebooksProjectsLocationsInstancesUpdateMetadataItemsSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], NotebooksProjectsLocationsInstancesUpdateMetadataItemsSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], NotebooksProjectsLocationsInstancesUpdateMetadataItemsSecurity.prototype, "oauth2c", void 0);
    return NotebooksProjectsLocationsInstancesUpdateMetadataItemsSecurity;
}(SpeakeasyBase));
export { NotebooksProjectsLocationsInstancesUpdateMetadataItemsSecurity };
var NotebooksProjectsLocationsInstancesUpdateMetadataItemsRequest = /** @class */ (function (_super) {
    __extends(NotebooksProjectsLocationsInstancesUpdateMetadataItemsRequest, _super);
    function NotebooksProjectsLocationsInstancesUpdateMetadataItemsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", NotebooksProjectsLocationsInstancesUpdateMetadataItemsPathParams)
    ], NotebooksProjectsLocationsInstancesUpdateMetadataItemsRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", NotebooksProjectsLocationsInstancesUpdateMetadataItemsQueryParams)
    ], NotebooksProjectsLocationsInstancesUpdateMetadataItemsRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.UpdateInstanceMetadataItemsRequest)
    ], NotebooksProjectsLocationsInstancesUpdateMetadataItemsRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", NotebooksProjectsLocationsInstancesUpdateMetadataItemsSecurity)
    ], NotebooksProjectsLocationsInstancesUpdateMetadataItemsRequest.prototype, "security", void 0);
    return NotebooksProjectsLocationsInstancesUpdateMetadataItemsRequest;
}(SpeakeasyBase));
export { NotebooksProjectsLocationsInstancesUpdateMetadataItemsRequest };
var NotebooksProjectsLocationsInstancesUpdateMetadataItemsResponse = /** @class */ (function (_super) {
    __extends(NotebooksProjectsLocationsInstancesUpdateMetadataItemsResponse, _super);
    function NotebooksProjectsLocationsInstancesUpdateMetadataItemsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], NotebooksProjectsLocationsInstancesUpdateMetadataItemsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], NotebooksProjectsLocationsInstancesUpdateMetadataItemsResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.UpdateInstanceMetadataItemsResponse)
    ], NotebooksProjectsLocationsInstancesUpdateMetadataItemsResponse.prototype, "updateInstanceMetadataItemsResponse", void 0);
    return NotebooksProjectsLocationsInstancesUpdateMetadataItemsResponse;
}(SpeakeasyBase));
export { NotebooksProjectsLocationsInstancesUpdateMetadataItemsResponse };
