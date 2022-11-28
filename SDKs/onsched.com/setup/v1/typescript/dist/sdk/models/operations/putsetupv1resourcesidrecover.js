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
var PutSetupV1ResourcesIdRecoverPathParams = /** @class */ (function (_super) {
    __extends(PutSetupV1ResourcesIdRecoverPathParams, _super);
    function PutSetupV1ResourcesIdRecoverPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", String)
    ], PutSetupV1ResourcesIdRecoverPathParams.prototype, "id", void 0);
    return PutSetupV1ResourcesIdRecoverPathParams;
}(SpeakeasyBase));
export { PutSetupV1ResourcesIdRecoverPathParams };
var PutSetupV1ResourcesIdRecoverQueryParams = /** @class */ (function (_super) {
    __extends(PutSetupV1ResourcesIdRecoverQueryParams, _super);
    function PutSetupV1ResourcesIdRecoverQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=googleAuthReturnUrl" }),
        __metadata("design:type", String)
    ], PutSetupV1ResourcesIdRecoverQueryParams.prototype, "googleAuthReturnUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=outlookAuthReturnUrl" }),
        __metadata("design:type", String)
    ], PutSetupV1ResourcesIdRecoverQueryParams.prototype, "outlookAuthReturnUrl", void 0);
    return PutSetupV1ResourcesIdRecoverQueryParams;
}(SpeakeasyBase));
export { PutSetupV1ResourcesIdRecoverQueryParams };
var PutSetupV1ResourcesIdRecoverRequest = /** @class */ (function (_super) {
    __extends(PutSetupV1ResourcesIdRecoverRequest, _super);
    function PutSetupV1ResourcesIdRecoverRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PutSetupV1ResourcesIdRecoverPathParams)
    ], PutSetupV1ResourcesIdRecoverRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PutSetupV1ResourcesIdRecoverQueryParams)
    ], PutSetupV1ResourcesIdRecoverRequest.prototype, "queryParams", void 0);
    return PutSetupV1ResourcesIdRecoverRequest;
}(SpeakeasyBase));
export { PutSetupV1ResourcesIdRecoverRequest };
var PutSetupV1ResourcesIdRecoverResponse = /** @class */ (function (_super) {
    __extends(PutSetupV1ResourcesIdRecoverResponse, _super);
    function PutSetupV1ResourcesIdRecoverResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PutSetupV1ResourcesIdRecoverResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ResourceViewModel)
    ], PutSetupV1ResourcesIdRecoverResponse.prototype, "resourceViewModel", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PutSetupV1ResourcesIdRecoverResponse.prototype, "statusCode", void 0);
    return PutSetupV1ResourcesIdRecoverResponse;
}(SpeakeasyBase));
export { PutSetupV1ResourcesIdRecoverResponse };
