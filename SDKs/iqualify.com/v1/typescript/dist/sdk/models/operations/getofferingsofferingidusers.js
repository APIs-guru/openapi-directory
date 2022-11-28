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
var GetOfferingsOfferingIdUsersPathParams = /** @class */ (function (_super) {
    __extends(GetOfferingsOfferingIdUsersPathParams, _super);
    function GetOfferingsOfferingIdUsersPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=offeringId" }),
        __metadata("design:type", String)
    ], GetOfferingsOfferingIdUsersPathParams.prototype, "offeringId", void 0);
    return GetOfferingsOfferingIdUsersPathParams;
}(SpeakeasyBase));
export { GetOfferingsOfferingIdUsersPathParams };
export var GetOfferingsOfferingIdUsersFacilitatorsEnum;
(function (GetOfferingsOfferingIdUsersFacilitatorsEnum) {
    GetOfferingsOfferingIdUsersFacilitatorsEnum["True"] = "true";
    GetOfferingsOfferingIdUsersFacilitatorsEnum["False"] = "false";
})(GetOfferingsOfferingIdUsersFacilitatorsEnum || (GetOfferingsOfferingIdUsersFacilitatorsEnum = {}));
export var GetOfferingsOfferingIdUsersLearnersEnum;
(function (GetOfferingsOfferingIdUsersLearnersEnum) {
    GetOfferingsOfferingIdUsersLearnersEnum["True"] = "true";
    GetOfferingsOfferingIdUsersLearnersEnum["False"] = "false";
})(GetOfferingsOfferingIdUsersLearnersEnum || (GetOfferingsOfferingIdUsersLearnersEnum = {}));
export var GetOfferingsOfferingIdUsersMarkersEnum;
(function (GetOfferingsOfferingIdUsersMarkersEnum) {
    GetOfferingsOfferingIdUsersMarkersEnum["True"] = "true";
    GetOfferingsOfferingIdUsersMarkersEnum["False"] = "false";
})(GetOfferingsOfferingIdUsersMarkersEnum || (GetOfferingsOfferingIdUsersMarkersEnum = {}));
var GetOfferingsOfferingIdUsersQueryParams = /** @class */ (function (_super) {
    __extends(GetOfferingsOfferingIdUsersQueryParams, _super);
    function GetOfferingsOfferingIdUsersQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=facilitators" }),
        __metadata("design:type", String)
    ], GetOfferingsOfferingIdUsersQueryParams.prototype, "facilitators", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=learners" }),
        __metadata("design:type", String)
    ], GetOfferingsOfferingIdUsersQueryParams.prototype, "learners", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=markers" }),
        __metadata("design:type", String)
    ], GetOfferingsOfferingIdUsersQueryParams.prototype, "markers", void 0);
    return GetOfferingsOfferingIdUsersQueryParams;
}(SpeakeasyBase));
export { GetOfferingsOfferingIdUsersQueryParams };
var GetOfferingsOfferingIdUsersRequest = /** @class */ (function (_super) {
    __extends(GetOfferingsOfferingIdUsersRequest, _super);
    function GetOfferingsOfferingIdUsersRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetOfferingsOfferingIdUsersPathParams)
    ], GetOfferingsOfferingIdUsersRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetOfferingsOfferingIdUsersQueryParams)
    ], GetOfferingsOfferingIdUsersRequest.prototype, "queryParams", void 0);
    return GetOfferingsOfferingIdUsersRequest;
}(SpeakeasyBase));
export { GetOfferingsOfferingIdUsersRequest };
var GetOfferingsOfferingIdUsersResponse = /** @class */ (function (_super) {
    __extends(GetOfferingsOfferingIdUsersResponse, _super);
    function GetOfferingsOfferingIdUsersResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetOfferingsOfferingIdUsersResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Error)
    ], GetOfferingsOfferingIdUsersResponse.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata({ elemType: shared.OfferingUserResponse }),
        __metadata("design:type", Array)
    ], GetOfferingsOfferingIdUsersResponse.prototype, "offeringUserResponses", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetOfferingsOfferingIdUsersResponse.prototype, "statusCode", void 0);
    return GetOfferingsOfferingIdUsersResponse;
}(SpeakeasyBase));
export { GetOfferingsOfferingIdUsersResponse };
