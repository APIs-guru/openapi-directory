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
var PutSetupV1ResourcesBulkQueryParams = /** @class */ (function (_super) {
    __extends(PutSetupV1ResourcesBulkQueryParams, _super);
    function PutSetupV1ResourcesBulkQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=googleAuthReturnUrl" }),
        __metadata("design:type", String)
    ], PutSetupV1ResourcesBulkQueryParams.prototype, "googleAuthReturnUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=outlookAuthReturnUrl" }),
        __metadata("design:type", String)
    ], PutSetupV1ResourcesBulkQueryParams.prototype, "outlookAuthReturnUrl", void 0);
    return PutSetupV1ResourcesBulkQueryParams;
}(SpeakeasyBase));
export { PutSetupV1ResourcesBulkQueryParams };
var PutSetupV1ResourcesBulkRequests = /** @class */ (function (_super) {
    __extends(PutSetupV1ResourcesBulkRequests, _super);
    function PutSetupV1ResourcesBulkRequests() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/*+json" }),
        __metadata("design:type", Map)
    ], PutSetupV1ResourcesBulkRequests.prototype, "resourcesUpdateModel", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", Map)
    ], PutSetupV1ResourcesBulkRequests.prototype, "resourcesUpdateModel1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json-patch+json" }),
        __metadata("design:type", Map)
    ], PutSetupV1ResourcesBulkRequests.prototype, "resourcesUpdateModel2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=text/json" }),
        __metadata("design:type", Map)
    ], PutSetupV1ResourcesBulkRequests.prototype, "resourcesUpdateModel3", void 0);
    return PutSetupV1ResourcesBulkRequests;
}(SpeakeasyBase));
export { PutSetupV1ResourcesBulkRequests };
var PutSetupV1ResourcesBulkRequest = /** @class */ (function (_super) {
    __extends(PutSetupV1ResourcesBulkRequest, _super);
    function PutSetupV1ResourcesBulkRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PutSetupV1ResourcesBulkQueryParams)
    ], PutSetupV1ResourcesBulkRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PutSetupV1ResourcesBulkRequests)
    ], PutSetupV1ResourcesBulkRequest.prototype, "request", void 0);
    return PutSetupV1ResourcesBulkRequest;
}(SpeakeasyBase));
export { PutSetupV1ResourcesBulkRequest };
var PutSetupV1ResourcesBulkResponse = /** @class */ (function (_super) {
    __extends(PutSetupV1ResourcesBulkResponse, _super);
    function PutSetupV1ResourcesBulkResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PutSetupV1ResourcesBulkResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata({ elemType: shared.ResourceViewModel }),
        __metadata("design:type", Array)
    ], PutSetupV1ResourcesBulkResponse.prototype, "resourceViewModels", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PutSetupV1ResourcesBulkResponse.prototype, "statusCode", void 0);
    return PutSetupV1ResourcesBulkResponse;
}(SpeakeasyBase));
export { PutSetupV1ResourcesBulkResponse };
