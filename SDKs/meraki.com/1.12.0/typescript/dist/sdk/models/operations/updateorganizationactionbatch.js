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
var UpdateOrganizationActionBatchPathParams = /** @class */ (function (_super) {
    __extends(UpdateOrganizationActionBatchPathParams, _super);
    function UpdateOrganizationActionBatchPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=actionBatchId" }),
        __metadata("design:type", String)
    ], UpdateOrganizationActionBatchPathParams.prototype, "actionBatchId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=organizationId" }),
        __metadata("design:type", String)
    ], UpdateOrganizationActionBatchPathParams.prototype, "organizationId", void 0);
    return UpdateOrganizationActionBatchPathParams;
}(SpeakeasyBase));
export { UpdateOrganizationActionBatchPathParams };
var UpdateOrganizationActionBatchRequestBody = /** @class */ (function (_super) {
    __extends(UpdateOrganizationActionBatchRequestBody, _super);
    function UpdateOrganizationActionBatchRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=confirmed" }),
        __metadata("design:type", Boolean)
    ], UpdateOrganizationActionBatchRequestBody.prototype, "confirmed", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=synchronous" }),
        __metadata("design:type", Boolean)
    ], UpdateOrganizationActionBatchRequestBody.prototype, "synchronous", void 0);
    return UpdateOrganizationActionBatchRequestBody;
}(SpeakeasyBase));
export { UpdateOrganizationActionBatchRequestBody };
var UpdateOrganizationActionBatchRequest = /** @class */ (function (_super) {
    __extends(UpdateOrganizationActionBatchRequest, _super);
    function UpdateOrganizationActionBatchRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UpdateOrganizationActionBatchPathParams)
    ], UpdateOrganizationActionBatchRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", UpdateOrganizationActionBatchRequestBody)
    ], UpdateOrganizationActionBatchRequest.prototype, "request", void 0);
    return UpdateOrganizationActionBatchRequest;
}(SpeakeasyBase));
export { UpdateOrganizationActionBatchRequest };
var UpdateOrganizationActionBatchResponse = /** @class */ (function (_super) {
    __extends(UpdateOrganizationActionBatchResponse, _super);
    function UpdateOrganizationActionBatchResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], UpdateOrganizationActionBatchResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], UpdateOrganizationActionBatchResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], UpdateOrganizationActionBatchResponse.prototype, "updateOrganizationActionBatch200ApplicationJsonObject", void 0);
    return UpdateOrganizationActionBatchResponse;
}(SpeakeasyBase));
export { UpdateOrganizationActionBatchResponse };
