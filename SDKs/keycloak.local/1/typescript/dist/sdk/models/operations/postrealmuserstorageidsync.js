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
var PostRealmUserStorageIdSyncPathParams = /** @class */ (function (_super) {
    __extends(PostRealmUserStorageIdSyncPathParams, _super);
    function PostRealmUserStorageIdSyncPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", String)
    ], PostRealmUserStorageIdSyncPathParams.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=realm" }),
        __metadata("design:type", String)
    ], PostRealmUserStorageIdSyncPathParams.prototype, "realm", void 0);
    return PostRealmUserStorageIdSyncPathParams;
}(SpeakeasyBase));
export { PostRealmUserStorageIdSyncPathParams };
var PostRealmUserStorageIdSyncQueryParams = /** @class */ (function (_super) {
    __extends(PostRealmUserStorageIdSyncQueryParams, _super);
    function PostRealmUserStorageIdSyncQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=action" }),
        __metadata("design:type", String)
    ], PostRealmUserStorageIdSyncQueryParams.prototype, "action", void 0);
    return PostRealmUserStorageIdSyncQueryParams;
}(SpeakeasyBase));
export { PostRealmUserStorageIdSyncQueryParams };
var PostRealmUserStorageIdSyncRequest = /** @class */ (function (_super) {
    __extends(PostRealmUserStorageIdSyncRequest, _super);
    function PostRealmUserStorageIdSyncRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostRealmUserStorageIdSyncPathParams)
    ], PostRealmUserStorageIdSyncRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostRealmUserStorageIdSyncQueryParams)
    ], PostRealmUserStorageIdSyncRequest.prototype, "queryParams", void 0);
    return PostRealmUserStorageIdSyncRequest;
}(SpeakeasyBase));
export { PostRealmUserStorageIdSyncRequest };
var PostRealmUserStorageIdSyncResponse = /** @class */ (function (_super) {
    __extends(PostRealmUserStorageIdSyncResponse, _super);
    function PostRealmUserStorageIdSyncResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PostRealmUserStorageIdSyncResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PostRealmUserStorageIdSyncResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.SynchronizationResult)
    ], PostRealmUserStorageIdSyncResponse.prototype, "synchronizationResult", void 0);
    return PostRealmUserStorageIdSyncResponse;
}(SpeakeasyBase));
export { PostRealmUserStorageIdSyncResponse };
