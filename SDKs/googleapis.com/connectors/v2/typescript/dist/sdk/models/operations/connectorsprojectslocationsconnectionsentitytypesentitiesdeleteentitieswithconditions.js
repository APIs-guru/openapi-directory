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
var ConnectorsProjectsLocationsConnectionsEntityTypesEntitiesDeleteEntitiesWithConditionsPathParams = /** @class */ (function (_super) {
    __extends(ConnectorsProjectsLocationsConnectionsEntityTypesEntitiesDeleteEntitiesWithConditionsPathParams, _super);
    function ConnectorsProjectsLocationsConnectionsEntityTypesEntitiesDeleteEntitiesWithConditionsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=entityType" }),
        __metadata("design:type", String)
    ], ConnectorsProjectsLocationsConnectionsEntityTypesEntitiesDeleteEntitiesWithConditionsPathParams.prototype, "entityType", void 0);
    return ConnectorsProjectsLocationsConnectionsEntityTypesEntitiesDeleteEntitiesWithConditionsPathParams;
}(SpeakeasyBase));
export { ConnectorsProjectsLocationsConnectionsEntityTypesEntitiesDeleteEntitiesWithConditionsPathParams };
var ConnectorsProjectsLocationsConnectionsEntityTypesEntitiesDeleteEntitiesWithConditionsQueryParams = /** @class */ (function (_super) {
    __extends(ConnectorsProjectsLocationsConnectionsEntityTypesEntitiesDeleteEntitiesWithConditionsQueryParams, _super);
    function ConnectorsProjectsLocationsConnectionsEntityTypesEntitiesDeleteEntitiesWithConditionsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], ConnectorsProjectsLocationsConnectionsEntityTypesEntitiesDeleteEntitiesWithConditionsQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], ConnectorsProjectsLocationsConnectionsEntityTypesEntitiesDeleteEntitiesWithConditionsQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], ConnectorsProjectsLocationsConnectionsEntityTypesEntitiesDeleteEntitiesWithConditionsQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], ConnectorsProjectsLocationsConnectionsEntityTypesEntitiesDeleteEntitiesWithConditionsQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=conditions" }),
        __metadata("design:type", String)
    ], ConnectorsProjectsLocationsConnectionsEntityTypesEntitiesDeleteEntitiesWithConditionsQueryParams.prototype, "conditions", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], ConnectorsProjectsLocationsConnectionsEntityTypesEntitiesDeleteEntitiesWithConditionsQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], ConnectorsProjectsLocationsConnectionsEntityTypesEntitiesDeleteEntitiesWithConditionsQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], ConnectorsProjectsLocationsConnectionsEntityTypesEntitiesDeleteEntitiesWithConditionsQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], ConnectorsProjectsLocationsConnectionsEntityTypesEntitiesDeleteEntitiesWithConditionsQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], ConnectorsProjectsLocationsConnectionsEntityTypesEntitiesDeleteEntitiesWithConditionsQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], ConnectorsProjectsLocationsConnectionsEntityTypesEntitiesDeleteEntitiesWithConditionsQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], ConnectorsProjectsLocationsConnectionsEntityTypesEntitiesDeleteEntitiesWithConditionsQueryParams.prototype, "uploadProtocol", void 0);
    return ConnectorsProjectsLocationsConnectionsEntityTypesEntitiesDeleteEntitiesWithConditionsQueryParams;
}(SpeakeasyBase));
export { ConnectorsProjectsLocationsConnectionsEntityTypesEntitiesDeleteEntitiesWithConditionsQueryParams };
var ConnectorsProjectsLocationsConnectionsEntityTypesEntitiesDeleteEntitiesWithConditionsSecurity = /** @class */ (function (_super) {
    __extends(ConnectorsProjectsLocationsConnectionsEntityTypesEntitiesDeleteEntitiesWithConditionsSecurity, _super);
    function ConnectorsProjectsLocationsConnectionsEntityTypesEntitiesDeleteEntitiesWithConditionsSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], ConnectorsProjectsLocationsConnectionsEntityTypesEntitiesDeleteEntitiesWithConditionsSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], ConnectorsProjectsLocationsConnectionsEntityTypesEntitiesDeleteEntitiesWithConditionsSecurity.prototype, "oauth2c", void 0);
    return ConnectorsProjectsLocationsConnectionsEntityTypesEntitiesDeleteEntitiesWithConditionsSecurity;
}(SpeakeasyBase));
export { ConnectorsProjectsLocationsConnectionsEntityTypesEntitiesDeleteEntitiesWithConditionsSecurity };
var ConnectorsProjectsLocationsConnectionsEntityTypesEntitiesDeleteEntitiesWithConditionsRequest = /** @class */ (function (_super) {
    __extends(ConnectorsProjectsLocationsConnectionsEntityTypesEntitiesDeleteEntitiesWithConditionsRequest, _super);
    function ConnectorsProjectsLocationsConnectionsEntityTypesEntitiesDeleteEntitiesWithConditionsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ConnectorsProjectsLocationsConnectionsEntityTypesEntitiesDeleteEntitiesWithConditionsPathParams)
    ], ConnectorsProjectsLocationsConnectionsEntityTypesEntitiesDeleteEntitiesWithConditionsRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ConnectorsProjectsLocationsConnectionsEntityTypesEntitiesDeleteEntitiesWithConditionsQueryParams)
    ], ConnectorsProjectsLocationsConnectionsEntityTypesEntitiesDeleteEntitiesWithConditionsRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ConnectorsProjectsLocationsConnectionsEntityTypesEntitiesDeleteEntitiesWithConditionsSecurity)
    ], ConnectorsProjectsLocationsConnectionsEntityTypesEntitiesDeleteEntitiesWithConditionsRequest.prototype, "security", void 0);
    return ConnectorsProjectsLocationsConnectionsEntityTypesEntitiesDeleteEntitiesWithConditionsRequest;
}(SpeakeasyBase));
export { ConnectorsProjectsLocationsConnectionsEntityTypesEntitiesDeleteEntitiesWithConditionsRequest };
var ConnectorsProjectsLocationsConnectionsEntityTypesEntitiesDeleteEntitiesWithConditionsResponse = /** @class */ (function (_super) {
    __extends(ConnectorsProjectsLocationsConnectionsEntityTypesEntitiesDeleteEntitiesWithConditionsResponse, _super);
    function ConnectorsProjectsLocationsConnectionsEntityTypesEntitiesDeleteEntitiesWithConditionsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ConnectorsProjectsLocationsConnectionsEntityTypesEntitiesDeleteEntitiesWithConditionsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], ConnectorsProjectsLocationsConnectionsEntityTypesEntitiesDeleteEntitiesWithConditionsResponse.prototype, "empty", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ConnectorsProjectsLocationsConnectionsEntityTypesEntitiesDeleteEntitiesWithConditionsResponse.prototype, "statusCode", void 0);
    return ConnectorsProjectsLocationsConnectionsEntityTypesEntitiesDeleteEntitiesWithConditionsResponse;
}(SpeakeasyBase));
export { ConnectorsProjectsLocationsConnectionsEntityTypesEntitiesDeleteEntitiesWithConditionsResponse };
