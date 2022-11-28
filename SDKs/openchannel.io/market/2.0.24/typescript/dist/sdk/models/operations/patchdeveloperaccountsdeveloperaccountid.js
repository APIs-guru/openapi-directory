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
var PatchDeveloperAccountsDeveloperAccountIdPathParams = /** @class */ (function (_super) {
    __extends(PatchDeveloperAccountsDeveloperAccountIdPathParams, _super);
    function PatchDeveloperAccountsDeveloperAccountIdPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=developerAccountId" }),
        __metadata("design:type", String)
    ], PatchDeveloperAccountsDeveloperAccountIdPathParams.prototype, "developerAccountId", void 0);
    return PatchDeveloperAccountsDeveloperAccountIdPathParams;
}(SpeakeasyBase));
export { PatchDeveloperAccountsDeveloperAccountIdPathParams };
var PatchDeveloperAccountsDeveloperAccountIdQueryParams = /** @class */ (function (_super) {
    __extends(PatchDeveloperAccountsDeveloperAccountIdQueryParams, _super);
    function PatchDeveloperAccountsDeveloperAccountIdQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=customData" }),
        __metadata("design:type", String)
    ], PatchDeveloperAccountsDeveloperAccountIdQueryParams.prototype, "customData", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=developerId" }),
        __metadata("design:type", String)
    ], PatchDeveloperAccountsDeveloperAccountIdQueryParams.prototype, "developerId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=email" }),
        __metadata("design:type", String)
    ], PatchDeveloperAccountsDeveloperAccountIdQueryParams.prototype, "email", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=name" }),
        __metadata("design:type", String)
    ], PatchDeveloperAccountsDeveloperAccountIdQueryParams.prototype, "name", void 0);
    return PatchDeveloperAccountsDeveloperAccountIdQueryParams;
}(SpeakeasyBase));
export { PatchDeveloperAccountsDeveloperAccountIdQueryParams };
var PatchDeveloperAccountsDeveloperAccountIdRequest = /** @class */ (function (_super) {
    __extends(PatchDeveloperAccountsDeveloperAccountIdRequest, _super);
    function PatchDeveloperAccountsDeveloperAccountIdRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PatchDeveloperAccountsDeveloperAccountIdPathParams)
    ], PatchDeveloperAccountsDeveloperAccountIdRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PatchDeveloperAccountsDeveloperAccountIdQueryParams)
    ], PatchDeveloperAccountsDeveloperAccountIdRequest.prototype, "queryParams", void 0);
    return PatchDeveloperAccountsDeveloperAccountIdRequest;
}(SpeakeasyBase));
export { PatchDeveloperAccountsDeveloperAccountIdRequest };
var PatchDeveloperAccountsDeveloperAccountIdResponse = /** @class */ (function (_super) {
    __extends(PatchDeveloperAccountsDeveloperAccountIdResponse, _super);
    function PatchDeveloperAccountsDeveloperAccountIdResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], PatchDeveloperAccountsDeveloperAccountIdResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PatchDeveloperAccountsDeveloperAccountIdResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PatchDeveloperAccountsDeveloperAccountIdResponse.prototype, "statusCode", void 0);
    return PatchDeveloperAccountsDeveloperAccountIdResponse;
}(SpeakeasyBase));
export { PatchDeveloperAccountsDeveloperAccountIdResponse };
