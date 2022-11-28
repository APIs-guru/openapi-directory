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
var RemoveFromPlaylistPathParams = /** @class */ (function (_super) {
    __extends(RemoveFromPlaylistPathParams, _super);
    function RemoveFromPlaylistPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=playlistId" }),
        __metadata("design:type", String)
    ], RemoveFromPlaylistPathParams.prototype, "playlistId", void 0);
    return RemoveFromPlaylistPathParams;
}(SpeakeasyBase));
export { RemoveFromPlaylistPathParams };
var RemoveFromPlaylistQueryParams = /** @class */ (function (_super) {
    __extends(RemoveFromPlaylistQueryParams, _super);
    function RemoveFromPlaylistQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=entryIds" }),
        __metadata("design:type", Array)
    ], RemoveFromPlaylistQueryParams.prototype, "entryIds", void 0);
    return RemoveFromPlaylistQueryParams;
}(SpeakeasyBase));
export { RemoveFromPlaylistQueryParams };
var RemoveFromPlaylistSecurity = /** @class */ (function (_super) {
    __extends(RemoveFromPlaylistSecurity, _super);
    function RemoveFromPlaylistSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeCustomAuthentication)
    ], RemoveFromPlaylistSecurity.prototype, "customAuthentication", void 0);
    return RemoveFromPlaylistSecurity;
}(SpeakeasyBase));
export { RemoveFromPlaylistSecurity };
var RemoveFromPlaylistRequest = /** @class */ (function (_super) {
    __extends(RemoveFromPlaylistRequest, _super);
    function RemoveFromPlaylistRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", RemoveFromPlaylistPathParams)
    ], RemoveFromPlaylistRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", RemoveFromPlaylistQueryParams)
    ], RemoveFromPlaylistRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", RemoveFromPlaylistSecurity)
    ], RemoveFromPlaylistRequest.prototype, "security", void 0);
    return RemoveFromPlaylistRequest;
}(SpeakeasyBase));
export { RemoveFromPlaylistRequest };
var RemoveFromPlaylistResponse = /** @class */ (function (_super) {
    __extends(RemoveFromPlaylistResponse, _super);
    function RemoveFromPlaylistResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], RemoveFromPlaylistResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], RemoveFromPlaylistResponse.prototype, "statusCode", void 0);
    return RemoveFromPlaylistResponse;
}(SpeakeasyBase));
export { RemoveFromPlaylistResponse };
