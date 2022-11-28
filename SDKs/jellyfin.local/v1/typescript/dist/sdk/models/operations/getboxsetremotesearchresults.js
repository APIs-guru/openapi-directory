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
var GetBoxSetRemoteSearchResultsRequests = /** @class */ (function (_super) {
    __extends(GetBoxSetRemoteSearchResultsRequests, _super);
    function GetBoxSetRemoteSearchResultsRequests() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/*+json" }),
        __metadata("design:type", shared.BoxSetInfoRemoteSearchQuery)
    ], GetBoxSetRemoteSearchResultsRequests.prototype, "boxSetInfoRemoteSearchQuery", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.BoxSetInfoRemoteSearchQuery)
    ], GetBoxSetRemoteSearchResultsRequests.prototype, "boxSetInfoRemoteSearchQuery1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=text/json" }),
        __metadata("design:type", shared.BoxSetInfoRemoteSearchQuery)
    ], GetBoxSetRemoteSearchResultsRequests.prototype, "boxSetInfoRemoteSearchQuery2", void 0);
    return GetBoxSetRemoteSearchResultsRequests;
}(SpeakeasyBase));
export { GetBoxSetRemoteSearchResultsRequests };
var GetBoxSetRemoteSearchResultsSecurity = /** @class */ (function (_super) {
    __extends(GetBoxSetRemoteSearchResultsSecurity, _super);
    function GetBoxSetRemoteSearchResultsSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeCustomAuthentication)
    ], GetBoxSetRemoteSearchResultsSecurity.prototype, "customAuthentication", void 0);
    return GetBoxSetRemoteSearchResultsSecurity;
}(SpeakeasyBase));
export { GetBoxSetRemoteSearchResultsSecurity };
var GetBoxSetRemoteSearchResultsRequest = /** @class */ (function (_super) {
    __extends(GetBoxSetRemoteSearchResultsRequest, _super);
    function GetBoxSetRemoteSearchResultsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetBoxSetRemoteSearchResultsRequests)
    ], GetBoxSetRemoteSearchResultsRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetBoxSetRemoteSearchResultsSecurity)
    ], GetBoxSetRemoteSearchResultsRequest.prototype, "security", void 0);
    return GetBoxSetRemoteSearchResultsRequest;
}(SpeakeasyBase));
export { GetBoxSetRemoteSearchResultsRequest };
var GetBoxSetRemoteSearchResultsResponse = /** @class */ (function (_super) {
    __extends(GetBoxSetRemoteSearchResultsResponse, _super);
    function GetBoxSetRemoteSearchResultsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetBoxSetRemoteSearchResultsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata({ elemType: shared.RemoteSearchResult }),
        __metadata("design:type", Array)
    ], GetBoxSetRemoteSearchResultsResponse.prototype, "remoteSearchResults", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetBoxSetRemoteSearchResultsResponse.prototype, "statusCode", void 0);
    return GetBoxSetRemoteSearchResultsResponse;
}(SpeakeasyBase));
export { GetBoxSetRemoteSearchResultsResponse };
