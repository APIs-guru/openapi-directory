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
var CreatePlaylistQueryParams = /** @class */ (function (_super) {
    __extends(CreatePlaylistQueryParams, _super);
    function CreatePlaylistQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=ids" }),
        __metadata("design:type", Array)
    ], CreatePlaylistQueryParams.prototype, "ids", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=mediaType" }),
        __metadata("design:type", String)
    ], CreatePlaylistQueryParams.prototype, "mediaType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=name" }),
        __metadata("design:type", String)
    ], CreatePlaylistQueryParams.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=userId" }),
        __metadata("design:type", String)
    ], CreatePlaylistQueryParams.prototype, "userId", void 0);
    return CreatePlaylistQueryParams;
}(SpeakeasyBase));
export { CreatePlaylistQueryParams };
var CreatePlaylistRequests = /** @class */ (function (_super) {
    __extends(CreatePlaylistRequests, _super);
    function CreatePlaylistRequests() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/*+json" }),
        __metadata("design:type", shared.CreatePlaylistDto)
    ], CreatePlaylistRequests.prototype, "createPlaylistDto", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.CreatePlaylistDto)
    ], CreatePlaylistRequests.prototype, "createPlaylistDto1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=text/json" }),
        __metadata("design:type", shared.CreatePlaylistDto)
    ], CreatePlaylistRequests.prototype, "createPlaylistDto2", void 0);
    return CreatePlaylistRequests;
}(SpeakeasyBase));
export { CreatePlaylistRequests };
var CreatePlaylistSecurity = /** @class */ (function (_super) {
    __extends(CreatePlaylistSecurity, _super);
    function CreatePlaylistSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeCustomAuthentication)
    ], CreatePlaylistSecurity.prototype, "customAuthentication", void 0);
    return CreatePlaylistSecurity;
}(SpeakeasyBase));
export { CreatePlaylistSecurity };
var CreatePlaylistRequest = /** @class */ (function (_super) {
    __extends(CreatePlaylistRequest, _super);
    function CreatePlaylistRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CreatePlaylistQueryParams)
    ], CreatePlaylistRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CreatePlaylistRequests)
    ], CreatePlaylistRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CreatePlaylistSecurity)
    ], CreatePlaylistRequest.prototype, "security", void 0);
    return CreatePlaylistRequest;
}(SpeakeasyBase));
export { CreatePlaylistRequest };
var CreatePlaylistResponse = /** @class */ (function (_super) {
    __extends(CreatePlaylistResponse, _super);
    function CreatePlaylistResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CreatePlaylistResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.PlaylistCreationResult)
    ], CreatePlaylistResponse.prototype, "playlistCreationResult", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], CreatePlaylistResponse.prototype, "statusCode", void 0);
    return CreatePlaylistResponse;
}(SpeakeasyBase));
export { CreatePlaylistResponse };
