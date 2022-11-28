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
var CreateOrganizationInsightMonitoredMediaServerPathParams = /** @class */ (function (_super) {
    __extends(CreateOrganizationInsightMonitoredMediaServerPathParams, _super);
    function CreateOrganizationInsightMonitoredMediaServerPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=organizationId" }),
        __metadata("design:type", String)
    ], CreateOrganizationInsightMonitoredMediaServerPathParams.prototype, "organizationId", void 0);
    return CreateOrganizationInsightMonitoredMediaServerPathParams;
}(SpeakeasyBase));
export { CreateOrganizationInsightMonitoredMediaServerPathParams };
var CreateOrganizationInsightMonitoredMediaServerRequestBody = /** @class */ (function (_super) {
    __extends(CreateOrganizationInsightMonitoredMediaServerRequestBody, _super);
    function CreateOrganizationInsightMonitoredMediaServerRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=address" }),
        __metadata("design:type", String)
    ], CreateOrganizationInsightMonitoredMediaServerRequestBody.prototype, "address", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=bestEffortMonitoringEnabled" }),
        __metadata("design:type", Boolean)
    ], CreateOrganizationInsightMonitoredMediaServerRequestBody.prototype, "bestEffortMonitoringEnabled", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], CreateOrganizationInsightMonitoredMediaServerRequestBody.prototype, "name", void 0);
    return CreateOrganizationInsightMonitoredMediaServerRequestBody;
}(SpeakeasyBase));
export { CreateOrganizationInsightMonitoredMediaServerRequestBody };
var CreateOrganizationInsightMonitoredMediaServerRequest = /** @class */ (function (_super) {
    __extends(CreateOrganizationInsightMonitoredMediaServerRequest, _super);
    function CreateOrganizationInsightMonitoredMediaServerRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CreateOrganizationInsightMonitoredMediaServerPathParams)
    ], CreateOrganizationInsightMonitoredMediaServerRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", CreateOrganizationInsightMonitoredMediaServerRequestBody)
    ], CreateOrganizationInsightMonitoredMediaServerRequest.prototype, "request", void 0);
    return CreateOrganizationInsightMonitoredMediaServerRequest;
}(SpeakeasyBase));
export { CreateOrganizationInsightMonitoredMediaServerRequest };
var CreateOrganizationInsightMonitoredMediaServerResponse = /** @class */ (function (_super) {
    __extends(CreateOrganizationInsightMonitoredMediaServerResponse, _super);
    function CreateOrganizationInsightMonitoredMediaServerResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CreateOrganizationInsightMonitoredMediaServerResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], CreateOrganizationInsightMonitoredMediaServerResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], CreateOrganizationInsightMonitoredMediaServerResponse.prototype, "createOrganizationInsightMonitoredMediaServer201ApplicationJsonObject", void 0);
    return CreateOrganizationInsightMonitoredMediaServerResponse;
}(SpeakeasyBase));
export { CreateOrganizationInsightMonitoredMediaServerResponse };
