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
import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
var ConnectorsProjectsLocationsConnectionsActionsExecutePathParams = /** @class */ (function (_super) {
    __extends(ConnectorsProjectsLocationsConnectionsActionsExecutePathParams, _super);
    function ConnectorsProjectsLocationsConnectionsActionsExecutePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=name" }),
        __metadata("design:type", String)
    ], ConnectorsProjectsLocationsConnectionsActionsExecutePathParams.prototype, "name", void 0);
    return ConnectorsProjectsLocationsConnectionsActionsExecutePathParams;
}(SpeakeasyBase));
export { ConnectorsProjectsLocationsConnectionsActionsExecutePathParams };
var ConnectorsProjectsLocationsConnectionsActionsExecuteQueryParams = /** @class */ (function (_super) {
    __extends(ConnectorsProjectsLocationsConnectionsActionsExecuteQueryParams, _super);
    function ConnectorsProjectsLocationsConnectionsActionsExecuteQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], ConnectorsProjectsLocationsConnectionsActionsExecuteQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], ConnectorsProjectsLocationsConnectionsActionsExecuteQueryParams.prototype, "accessToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], ConnectorsProjectsLocationsConnectionsActionsExecuteQueryParams.prototype, "alt", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], ConnectorsProjectsLocationsConnectionsActionsExecuteQueryParams.prototype, "callback", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], ConnectorsProjectsLocationsConnectionsActionsExecuteQueryParams.prototype, "fields", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], ConnectorsProjectsLocationsConnectionsActionsExecuteQueryParams.prototype, "key", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], ConnectorsProjectsLocationsConnectionsActionsExecuteQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], ConnectorsProjectsLocationsConnectionsActionsExecuteQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], ConnectorsProjectsLocationsConnectionsActionsExecuteQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], ConnectorsProjectsLocationsConnectionsActionsExecuteQueryParams.prototype, "uploadType", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], ConnectorsProjectsLocationsConnectionsActionsExecuteQueryParams.prototype, "uploadProtocol", void 0);
    return ConnectorsProjectsLocationsConnectionsActionsExecuteQueryParams;
}(SpeakeasyBase));
export { ConnectorsProjectsLocationsConnectionsActionsExecuteQueryParams };
var ConnectorsProjectsLocationsConnectionsActionsExecuteSecurity = /** @class */ (function (_super) {
    __extends(ConnectorsProjectsLocationsConnectionsActionsExecuteSecurity, _super);
    function ConnectorsProjectsLocationsConnectionsActionsExecuteSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], ConnectorsProjectsLocationsConnectionsActionsExecuteSecurity.prototype, "oauth2", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], ConnectorsProjectsLocationsConnectionsActionsExecuteSecurity.prototype, "oauth2c", void 0);
    return ConnectorsProjectsLocationsConnectionsActionsExecuteSecurity;
}(SpeakeasyBase));
export { ConnectorsProjectsLocationsConnectionsActionsExecuteSecurity };
var ConnectorsProjectsLocationsConnectionsActionsExecuteRequest = /** @class */ (function (_super) {
    __extends(ConnectorsProjectsLocationsConnectionsActionsExecuteRequest, _super);
    function ConnectorsProjectsLocationsConnectionsActionsExecuteRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", ConnectorsProjectsLocationsConnectionsActionsExecutePathParams)
    ], ConnectorsProjectsLocationsConnectionsActionsExecuteRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", ConnectorsProjectsLocationsConnectionsActionsExecuteQueryParams)
    ], ConnectorsProjectsLocationsConnectionsActionsExecuteRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.ExecuteActionRequest)
    ], ConnectorsProjectsLocationsConnectionsActionsExecuteRequest.prototype, "request", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", ConnectorsProjectsLocationsConnectionsActionsExecuteSecurity)
    ], ConnectorsProjectsLocationsConnectionsActionsExecuteRequest.prototype, "security", void 0);
    return ConnectorsProjectsLocationsConnectionsActionsExecuteRequest;
}(SpeakeasyBase));
export { ConnectorsProjectsLocationsConnectionsActionsExecuteRequest };
var ConnectorsProjectsLocationsConnectionsActionsExecuteResponse = /** @class */ (function (_super) {
    __extends(ConnectorsProjectsLocationsConnectionsActionsExecuteResponse, _super);
    function ConnectorsProjectsLocationsConnectionsActionsExecuteResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], ConnectorsProjectsLocationsConnectionsActionsExecuteResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.ExecuteActionResponse)
    ], ConnectorsProjectsLocationsConnectionsActionsExecuteResponse.prototype, "executeActionResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], ConnectorsProjectsLocationsConnectionsActionsExecuteResponse.prototype, "statusCode", void 0);
    return ConnectorsProjectsLocationsConnectionsActionsExecuteResponse;
}(SpeakeasyBase));
export { ConnectorsProjectsLocationsConnectionsActionsExecuteResponse };
