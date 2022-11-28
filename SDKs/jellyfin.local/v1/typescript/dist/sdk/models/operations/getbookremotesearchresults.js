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
var GetBookRemoteSearchResultsRequests = /** @class */ (function (_super) {
    __extends(GetBookRemoteSearchResultsRequests, _super);
    function GetBookRemoteSearchResultsRequests() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/*+json" }),
        __metadata("design:type", shared.BookInfoRemoteSearchQuery)
    ], GetBookRemoteSearchResultsRequests.prototype, "bookInfoRemoteSearchQuery", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.BookInfoRemoteSearchQuery)
    ], GetBookRemoteSearchResultsRequests.prototype, "bookInfoRemoteSearchQuery1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=text/json" }),
        __metadata("design:type", shared.BookInfoRemoteSearchQuery)
    ], GetBookRemoteSearchResultsRequests.prototype, "bookInfoRemoteSearchQuery2", void 0);
    return GetBookRemoteSearchResultsRequests;
}(SpeakeasyBase));
export { GetBookRemoteSearchResultsRequests };
var GetBookRemoteSearchResultsSecurity = /** @class */ (function (_super) {
    __extends(GetBookRemoteSearchResultsSecurity, _super);
    function GetBookRemoteSearchResultsSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeCustomAuthentication)
    ], GetBookRemoteSearchResultsSecurity.prototype, "customAuthentication", void 0);
    return GetBookRemoteSearchResultsSecurity;
}(SpeakeasyBase));
export { GetBookRemoteSearchResultsSecurity };
var GetBookRemoteSearchResultsRequest = /** @class */ (function (_super) {
    __extends(GetBookRemoteSearchResultsRequest, _super);
    function GetBookRemoteSearchResultsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetBookRemoteSearchResultsRequests)
    ], GetBookRemoteSearchResultsRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetBookRemoteSearchResultsSecurity)
    ], GetBookRemoteSearchResultsRequest.prototype, "security", void 0);
    return GetBookRemoteSearchResultsRequest;
}(SpeakeasyBase));
export { GetBookRemoteSearchResultsRequest };
var GetBookRemoteSearchResultsResponse = /** @class */ (function (_super) {
    __extends(GetBookRemoteSearchResultsResponse, _super);
    function GetBookRemoteSearchResultsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetBookRemoteSearchResultsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata({ elemType: shared.RemoteSearchResult }),
        __metadata("design:type", Array)
    ], GetBookRemoteSearchResultsResponse.prototype, "remoteSearchResults", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetBookRemoteSearchResultsResponse.prototype, "statusCode", void 0);
    return GetBookRemoteSearchResultsResponse;
}(SpeakeasyBase));
export { GetBookRemoteSearchResultsResponse };
