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
var GetOrganizationActionBatchesPathParams = /** @class */ (function (_super) {
    __extends(GetOrganizationActionBatchesPathParams, _super);
    function GetOrganizationActionBatchesPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=organizationId" }),
        __metadata("design:type", String)
    ], GetOrganizationActionBatchesPathParams.prototype, "organizationId", void 0);
    return GetOrganizationActionBatchesPathParams;
}(SpeakeasyBase));
export { GetOrganizationActionBatchesPathParams };
export var GetOrganizationActionBatchesStatusEnum;
(function (GetOrganizationActionBatchesStatusEnum) {
    GetOrganizationActionBatchesStatusEnum["Pending"] = "pending";
    GetOrganizationActionBatchesStatusEnum["Completed"] = "completed";
    GetOrganizationActionBatchesStatusEnum["Failed"] = "failed";
})(GetOrganizationActionBatchesStatusEnum || (GetOrganizationActionBatchesStatusEnum = {}));
var GetOrganizationActionBatchesQueryParams = /** @class */ (function (_super) {
    __extends(GetOrganizationActionBatchesQueryParams, _super);
    function GetOrganizationActionBatchesQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=status" }),
        __metadata("design:type", String)
    ], GetOrganizationActionBatchesQueryParams.prototype, "status", void 0);
    return GetOrganizationActionBatchesQueryParams;
}(SpeakeasyBase));
export { GetOrganizationActionBatchesQueryParams };
var GetOrganizationActionBatchesRequest = /** @class */ (function (_super) {
    __extends(GetOrganizationActionBatchesRequest, _super);
    function GetOrganizationActionBatchesRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetOrganizationActionBatchesPathParams)
    ], GetOrganizationActionBatchesRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetOrganizationActionBatchesQueryParams)
    ], GetOrganizationActionBatchesRequest.prototype, "queryParams", void 0);
    return GetOrganizationActionBatchesRequest;
}(SpeakeasyBase));
export { GetOrganizationActionBatchesRequest };
var GetOrganizationActionBatchesResponse = /** @class */ (function (_super) {
    __extends(GetOrganizationActionBatchesResponse, _super);
    function GetOrganizationActionBatchesResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetOrganizationActionBatchesResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetOrganizationActionBatchesResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], GetOrganizationActionBatchesResponse.prototype, "getOrganizationActionBatches200ApplicationJsonObject", void 0);
    return GetOrganizationActionBatchesResponse;
}(SpeakeasyBase));
export { GetOrganizationActionBatchesResponse };
