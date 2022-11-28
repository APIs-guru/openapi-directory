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
var UpdateDisplayPreferencesPathParams = /** @class */ (function (_super) {
    __extends(UpdateDisplayPreferencesPathParams, _super);
    function UpdateDisplayPreferencesPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=displayPreferencesId" }),
        __metadata("design:type", String)
    ], UpdateDisplayPreferencesPathParams.prototype, "displayPreferencesId", void 0);
    return UpdateDisplayPreferencesPathParams;
}(SpeakeasyBase));
export { UpdateDisplayPreferencesPathParams };
var UpdateDisplayPreferencesQueryParams = /** @class */ (function (_super) {
    __extends(UpdateDisplayPreferencesQueryParams, _super);
    function UpdateDisplayPreferencesQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=client" }),
        __metadata("design:type", String)
    ], UpdateDisplayPreferencesQueryParams.prototype, "client", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=userId" }),
        __metadata("design:type", String)
    ], UpdateDisplayPreferencesQueryParams.prototype, "userId", void 0);
    return UpdateDisplayPreferencesQueryParams;
}(SpeakeasyBase));
export { UpdateDisplayPreferencesQueryParams };
var UpdateDisplayPreferencesRequests = /** @class */ (function (_super) {
    __extends(UpdateDisplayPreferencesRequests, _super);
    function UpdateDisplayPreferencesRequests() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/*+json" }),
        __metadata("design:type", shared.DisplayPreferencesDto)
    ], UpdateDisplayPreferencesRequests.prototype, "displayPreferencesDto", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.DisplayPreferencesDto)
    ], UpdateDisplayPreferencesRequests.prototype, "displayPreferencesDto1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=text/json" }),
        __metadata("design:type", shared.DisplayPreferencesDto)
    ], UpdateDisplayPreferencesRequests.prototype, "displayPreferencesDto2", void 0);
    return UpdateDisplayPreferencesRequests;
}(SpeakeasyBase));
export { UpdateDisplayPreferencesRequests };
var UpdateDisplayPreferencesSecurity = /** @class */ (function (_super) {
    __extends(UpdateDisplayPreferencesSecurity, _super);
    function UpdateDisplayPreferencesSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeCustomAuthentication)
    ], UpdateDisplayPreferencesSecurity.prototype, "customAuthentication", void 0);
    return UpdateDisplayPreferencesSecurity;
}(SpeakeasyBase));
export { UpdateDisplayPreferencesSecurity };
var UpdateDisplayPreferencesRequest = /** @class */ (function (_super) {
    __extends(UpdateDisplayPreferencesRequest, _super);
    function UpdateDisplayPreferencesRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UpdateDisplayPreferencesPathParams)
    ], UpdateDisplayPreferencesRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UpdateDisplayPreferencesQueryParams)
    ], UpdateDisplayPreferencesRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UpdateDisplayPreferencesRequests)
    ], UpdateDisplayPreferencesRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UpdateDisplayPreferencesSecurity)
    ], UpdateDisplayPreferencesRequest.prototype, "security", void 0);
    return UpdateDisplayPreferencesRequest;
}(SpeakeasyBase));
export { UpdateDisplayPreferencesRequest };
var UpdateDisplayPreferencesResponse = /** @class */ (function (_super) {
    __extends(UpdateDisplayPreferencesResponse, _super);
    function UpdateDisplayPreferencesResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], UpdateDisplayPreferencesResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], UpdateDisplayPreferencesResponse.prototype, "statusCode", void 0);
    return UpdateDisplayPreferencesResponse;
}(SpeakeasyBase));
export { UpdateDisplayPreferencesResponse };
