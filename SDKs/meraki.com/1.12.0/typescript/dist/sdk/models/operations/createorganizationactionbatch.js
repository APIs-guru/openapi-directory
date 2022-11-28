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
var CreateOrganizationActionBatchPathParams = /** @class */ (function (_super) {
    __extends(CreateOrganizationActionBatchPathParams, _super);
    function CreateOrganizationActionBatchPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=organizationId" }),
        __metadata("design:type", String)
    ], CreateOrganizationActionBatchPathParams.prototype, "organizationId", void 0);
    return CreateOrganizationActionBatchPathParams;
}(SpeakeasyBase));
export { CreateOrganizationActionBatchPathParams };
var CreateOrganizationActionBatchRequestBodyActions = /** @class */ (function (_super) {
    __extends(CreateOrganizationActionBatchRequestBodyActions, _super);
    function CreateOrganizationActionBatchRequestBodyActions() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=body" }),
        __metadata("design:type", Map)
    ], CreateOrganizationActionBatchRequestBodyActions.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=operation" }),
        __metadata("design:type", String)
    ], CreateOrganizationActionBatchRequestBodyActions.prototype, "operation", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=resource" }),
        __metadata("design:type", String)
    ], CreateOrganizationActionBatchRequestBodyActions.prototype, "resource", void 0);
    return CreateOrganizationActionBatchRequestBodyActions;
}(SpeakeasyBase));
export { CreateOrganizationActionBatchRequestBodyActions };
var CreateOrganizationActionBatchRequestBody = /** @class */ (function (_super) {
    __extends(CreateOrganizationActionBatchRequestBody, _super);
    function CreateOrganizationActionBatchRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=actions", elemType: CreateOrganizationActionBatchRequestBodyActions }),
        __metadata("design:type", Array)
    ], CreateOrganizationActionBatchRequestBody.prototype, "actions", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=confirmed" }),
        __metadata("design:type", Boolean)
    ], CreateOrganizationActionBatchRequestBody.prototype, "confirmed", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=synchronous" }),
        __metadata("design:type", Boolean)
    ], CreateOrganizationActionBatchRequestBody.prototype, "synchronous", void 0);
    return CreateOrganizationActionBatchRequestBody;
}(SpeakeasyBase));
export { CreateOrganizationActionBatchRequestBody };
var CreateOrganizationActionBatchRequest = /** @class */ (function (_super) {
    __extends(CreateOrganizationActionBatchRequest, _super);
    function CreateOrganizationActionBatchRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CreateOrganizationActionBatchPathParams)
    ], CreateOrganizationActionBatchRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", CreateOrganizationActionBatchRequestBody)
    ], CreateOrganizationActionBatchRequest.prototype, "request", void 0);
    return CreateOrganizationActionBatchRequest;
}(SpeakeasyBase));
export { CreateOrganizationActionBatchRequest };
var CreateOrganizationActionBatchResponse = /** @class */ (function (_super) {
    __extends(CreateOrganizationActionBatchResponse, _super);
    function CreateOrganizationActionBatchResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CreateOrganizationActionBatchResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], CreateOrganizationActionBatchResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], CreateOrganizationActionBatchResponse.prototype, "createOrganizationActionBatch201ApplicationJsonObject", void 0);
    return CreateOrganizationActionBatchResponse;
}(SpeakeasyBase));
export { CreateOrganizationActionBatchResponse };
