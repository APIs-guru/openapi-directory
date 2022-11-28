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
var DeletePodcastByIdPathParams = /** @class */ (function (_super) {
    __extends(DeletePodcastByIdPathParams, _super);
    function DeletePodcastByIdPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", String)
    ], DeletePodcastByIdPathParams.prototype, "id", void 0);
    return DeletePodcastByIdPathParams;
}(SpeakeasyBase));
export { DeletePodcastByIdPathParams };
var DeletePodcastByIdQueryParams = /** @class */ (function (_super) {
    __extends(DeletePodcastByIdQueryParams, _super);
    function DeletePodcastByIdQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=reason" }),
        __metadata("design:type", String)
    ], DeletePodcastByIdQueryParams.prototype, "reason", void 0);
    return DeletePodcastByIdQueryParams;
}(SpeakeasyBase));
export { DeletePodcastByIdQueryParams };
var DeletePodcastByIdHeaders = /** @class */ (function (_super) {
    __extends(DeletePodcastByIdHeaders, _super);
    function DeletePodcastByIdHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-ListenAPI-Key" }),
        __metadata("design:type", String)
    ], DeletePodcastByIdHeaders.prototype, "xListenApiKey", void 0);
    return DeletePodcastByIdHeaders;
}(SpeakeasyBase));
export { DeletePodcastByIdHeaders };
var DeletePodcastByIdRequest = /** @class */ (function (_super) {
    __extends(DeletePodcastByIdRequest, _super);
    function DeletePodcastByIdRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DeletePodcastByIdPathParams)
    ], DeletePodcastByIdRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DeletePodcastByIdQueryParams)
    ], DeletePodcastByIdRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DeletePodcastByIdHeaders)
    ], DeletePodcastByIdRequest.prototype, "headers", void 0);
    return DeletePodcastByIdRequest;
}(SpeakeasyBase));
export { DeletePodcastByIdRequest };
var DeletePodcastByIdResponse = /** @class */ (function (_super) {
    __extends(DeletePodcastByIdResponse, _super);
    function DeletePodcastByIdResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DeletePodcastByIdResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.DeletePodcastResponse)
    ], DeletePodcastByIdResponse.prototype, "deletePodcastResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], DeletePodcastByIdResponse.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DeletePodcastByIdResponse.prototype, "statusCode", void 0);
    return DeletePodcastByIdResponse;
}(SpeakeasyBase));
export { DeletePodcastByIdResponse };
