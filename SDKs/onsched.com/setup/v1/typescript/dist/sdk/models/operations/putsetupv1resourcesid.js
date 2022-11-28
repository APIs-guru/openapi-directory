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
var PutSetupV1ResourcesIdPathParams = /** @class */ (function (_super) {
    __extends(PutSetupV1ResourcesIdPathParams, _super);
    function PutSetupV1ResourcesIdPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", String)
    ], PutSetupV1ResourcesIdPathParams.prototype, "id", void 0);
    return PutSetupV1ResourcesIdPathParams;
}(SpeakeasyBase));
export { PutSetupV1ResourcesIdPathParams };
var PutSetupV1ResourcesIdQueryParams = /** @class */ (function (_super) {
    __extends(PutSetupV1ResourcesIdQueryParams, _super);
    function PutSetupV1ResourcesIdQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=googleAuthReturnUrl" }),
        __metadata("design:type", String)
    ], PutSetupV1ResourcesIdQueryParams.prototype, "googleAuthReturnUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=outlookAuthReturnUrl" }),
        __metadata("design:type", String)
    ], PutSetupV1ResourcesIdQueryParams.prototype, "outlookAuthReturnUrl", void 0);
    return PutSetupV1ResourcesIdQueryParams;
}(SpeakeasyBase));
export { PutSetupV1ResourcesIdQueryParams };
var PutSetupV1ResourcesIdRequests = /** @class */ (function (_super) {
    __extends(PutSetupV1ResourcesIdRequests, _super);
    function PutSetupV1ResourcesIdRequests() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/*+json" }),
        __metadata("design:type", shared.ResourceUpdateModel)
    ], PutSetupV1ResourcesIdRequests.prototype, "resourceUpdateModel", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.ResourceUpdateModel)
    ], PutSetupV1ResourcesIdRequests.prototype, "resourceUpdateModel1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json-patch+json" }),
        __metadata("design:type", shared.ResourceUpdateModel)
    ], PutSetupV1ResourcesIdRequests.prototype, "resourceUpdateModel2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=text/json" }),
        __metadata("design:type", shared.ResourceUpdateModel)
    ], PutSetupV1ResourcesIdRequests.prototype, "resourceUpdateModel3", void 0);
    return PutSetupV1ResourcesIdRequests;
}(SpeakeasyBase));
export { PutSetupV1ResourcesIdRequests };
var PutSetupV1ResourcesIdRequest = /** @class */ (function (_super) {
    __extends(PutSetupV1ResourcesIdRequest, _super);
    function PutSetupV1ResourcesIdRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PutSetupV1ResourcesIdPathParams)
    ], PutSetupV1ResourcesIdRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PutSetupV1ResourcesIdQueryParams)
    ], PutSetupV1ResourcesIdRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PutSetupV1ResourcesIdRequests)
    ], PutSetupV1ResourcesIdRequest.prototype, "request", void 0);
    return PutSetupV1ResourcesIdRequest;
}(SpeakeasyBase));
export { PutSetupV1ResourcesIdRequest };
var PutSetupV1ResourcesIdResponse = /** @class */ (function (_super) {
    __extends(PutSetupV1ResourcesIdResponse, _super);
    function PutSetupV1ResourcesIdResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PutSetupV1ResourcesIdResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ResourceViewModel)
    ], PutSetupV1ResourcesIdResponse.prototype, "resourceViewModel", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PutSetupV1ResourcesIdResponse.prototype, "statusCode", void 0);
    return PutSetupV1ResourcesIdResponse;
}(SpeakeasyBase));
export { PutSetupV1ResourcesIdResponse };
