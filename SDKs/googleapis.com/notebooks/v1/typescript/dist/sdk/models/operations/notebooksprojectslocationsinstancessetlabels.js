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
var NotebooksProjectsLocationsInstancesSetLabelsPathParams = /** @class */ (function (_super) {
    __extends(NotebooksProjectsLocationsInstancesSetLabelsPathParams, _super);
    function NotebooksProjectsLocationsInstancesSetLabelsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=name" }),
        __metadata("design:type", String)
    ], NotebooksProjectsLocationsInstancesSetLabelsPathParams.prototype, "name", void 0);
    return NotebooksProjectsLocationsInstancesSetLabelsPathParams;
}(SpeakeasyBase));
export { NotebooksProjectsLocationsInstancesSetLabelsPathParams };
var NotebooksProjectsLocationsInstancesSetLabelsQueryParams = /** @class */ (function (_super) {
    __extends(NotebooksProjectsLocationsInstancesSetLabelsQueryParams, _super);
    function NotebooksProjectsLocationsInstancesSetLabelsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], NotebooksProjectsLocationsInstancesSetLabelsQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], NotebooksProjectsLocationsInstancesSetLabelsQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], NotebooksProjectsLocationsInstancesSetLabelsQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], NotebooksProjectsLocationsInstancesSetLabelsQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], NotebooksProjectsLocationsInstancesSetLabelsQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], NotebooksProjectsLocationsInstancesSetLabelsQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], NotebooksProjectsLocationsInstancesSetLabelsQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], NotebooksProjectsLocationsInstancesSetLabelsQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], NotebooksProjectsLocationsInstancesSetLabelsQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], NotebooksProjectsLocationsInstancesSetLabelsQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], NotebooksProjectsLocationsInstancesSetLabelsQueryParams.prototype, "uploadProtocol", void 0);
    return NotebooksProjectsLocationsInstancesSetLabelsQueryParams;
}(SpeakeasyBase));
export { NotebooksProjectsLocationsInstancesSetLabelsQueryParams };
var NotebooksProjectsLocationsInstancesSetLabelsSecurity = /** @class */ (function (_super) {
    __extends(NotebooksProjectsLocationsInstancesSetLabelsSecurity, _super);
    function NotebooksProjectsLocationsInstancesSetLabelsSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], NotebooksProjectsLocationsInstancesSetLabelsSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], NotebooksProjectsLocationsInstancesSetLabelsSecurity.prototype, "oauth2c", void 0);
    return NotebooksProjectsLocationsInstancesSetLabelsSecurity;
}(SpeakeasyBase));
export { NotebooksProjectsLocationsInstancesSetLabelsSecurity };
var NotebooksProjectsLocationsInstancesSetLabelsRequest = /** @class */ (function (_super) {
    __extends(NotebooksProjectsLocationsInstancesSetLabelsRequest, _super);
    function NotebooksProjectsLocationsInstancesSetLabelsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", NotebooksProjectsLocationsInstancesSetLabelsPathParams)
    ], NotebooksProjectsLocationsInstancesSetLabelsRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", NotebooksProjectsLocationsInstancesSetLabelsQueryParams)
    ], NotebooksProjectsLocationsInstancesSetLabelsRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.SetInstanceLabelsRequest)
    ], NotebooksProjectsLocationsInstancesSetLabelsRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", NotebooksProjectsLocationsInstancesSetLabelsSecurity)
    ], NotebooksProjectsLocationsInstancesSetLabelsRequest.prototype, "security", void 0);
    return NotebooksProjectsLocationsInstancesSetLabelsRequest;
}(SpeakeasyBase));
export { NotebooksProjectsLocationsInstancesSetLabelsRequest };
var NotebooksProjectsLocationsInstancesSetLabelsResponse = /** @class */ (function (_super) {
    __extends(NotebooksProjectsLocationsInstancesSetLabelsResponse, _super);
    function NotebooksProjectsLocationsInstancesSetLabelsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], NotebooksProjectsLocationsInstancesSetLabelsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Operation)
    ], NotebooksProjectsLocationsInstancesSetLabelsResponse.prototype, "operation", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], NotebooksProjectsLocationsInstancesSetLabelsResponse.prototype, "statusCode", void 0);
    return NotebooksProjectsLocationsInstancesSetLabelsResponse;
}(SpeakeasyBase));
export { NotebooksProjectsLocationsInstancesSetLabelsResponse };
