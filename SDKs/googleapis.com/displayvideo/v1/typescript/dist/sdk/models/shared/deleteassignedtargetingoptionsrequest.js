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
export var DeleteAssignedTargetingOptionsRequestTargetingTypeEnum;
(function (DeleteAssignedTargetingOptionsRequestTargetingTypeEnum) {
    DeleteAssignedTargetingOptionsRequestTargetingTypeEnum["TargetingTypeUnspecified"] = "TARGETING_TYPE_UNSPECIFIED";
    DeleteAssignedTargetingOptionsRequestTargetingTypeEnum["TargetingTypeChannel"] = "TARGETING_TYPE_CHANNEL";
    DeleteAssignedTargetingOptionsRequestTargetingTypeEnum["TargetingTypeAppCategory"] = "TARGETING_TYPE_APP_CATEGORY";
    DeleteAssignedTargetingOptionsRequestTargetingTypeEnum["TargetingTypeApp"] = "TARGETING_TYPE_APP";
    DeleteAssignedTargetingOptionsRequestTargetingTypeEnum["TargetingTypeUrl"] = "TARGETING_TYPE_URL";
    DeleteAssignedTargetingOptionsRequestTargetingTypeEnum["TargetingTypeDayAndTime"] = "TARGETING_TYPE_DAY_AND_TIME";
    DeleteAssignedTargetingOptionsRequestTargetingTypeEnum["TargetingTypeAgeRange"] = "TARGETING_TYPE_AGE_RANGE";
    DeleteAssignedTargetingOptionsRequestTargetingTypeEnum["TargetingTypeRegionalLocationList"] = "TARGETING_TYPE_REGIONAL_LOCATION_LIST";
    DeleteAssignedTargetingOptionsRequestTargetingTypeEnum["TargetingTypeProximityLocationList"] = "TARGETING_TYPE_PROXIMITY_LOCATION_LIST";
    DeleteAssignedTargetingOptionsRequestTargetingTypeEnum["TargetingTypeGender"] = "TARGETING_TYPE_GENDER";
    DeleteAssignedTargetingOptionsRequestTargetingTypeEnum["TargetingTypeVideoPlayerSize"] = "TARGETING_TYPE_VIDEO_PLAYER_SIZE";
    DeleteAssignedTargetingOptionsRequestTargetingTypeEnum["TargetingTypeUserRewardedContent"] = "TARGETING_TYPE_USER_REWARDED_CONTENT";
    DeleteAssignedTargetingOptionsRequestTargetingTypeEnum["TargetingTypeParentalStatus"] = "TARGETING_TYPE_PARENTAL_STATUS";
    DeleteAssignedTargetingOptionsRequestTargetingTypeEnum["TargetingTypeContentInstreamPosition"] = "TARGETING_TYPE_CONTENT_INSTREAM_POSITION";
    DeleteAssignedTargetingOptionsRequestTargetingTypeEnum["TargetingTypeContentOutstreamPosition"] = "TARGETING_TYPE_CONTENT_OUTSTREAM_POSITION";
    DeleteAssignedTargetingOptionsRequestTargetingTypeEnum["TargetingTypeDeviceType"] = "TARGETING_TYPE_DEVICE_TYPE";
    DeleteAssignedTargetingOptionsRequestTargetingTypeEnum["TargetingTypeAudienceGroup"] = "TARGETING_TYPE_AUDIENCE_GROUP";
    DeleteAssignedTargetingOptionsRequestTargetingTypeEnum["TargetingTypeBrowser"] = "TARGETING_TYPE_BROWSER";
    DeleteAssignedTargetingOptionsRequestTargetingTypeEnum["TargetingTypeHouseholdIncome"] = "TARGETING_TYPE_HOUSEHOLD_INCOME";
    DeleteAssignedTargetingOptionsRequestTargetingTypeEnum["TargetingTypeOnScreenPosition"] = "TARGETING_TYPE_ON_SCREEN_POSITION";
    DeleteAssignedTargetingOptionsRequestTargetingTypeEnum["TargetingTypeThirdPartyVerifier"] = "TARGETING_TYPE_THIRD_PARTY_VERIFIER";
    DeleteAssignedTargetingOptionsRequestTargetingTypeEnum["TargetingTypeDigitalContentLabelExclusion"] = "TARGETING_TYPE_DIGITAL_CONTENT_LABEL_EXCLUSION";
    DeleteAssignedTargetingOptionsRequestTargetingTypeEnum["TargetingTypeSensitiveCategoryExclusion"] = "TARGETING_TYPE_SENSITIVE_CATEGORY_EXCLUSION";
    DeleteAssignedTargetingOptionsRequestTargetingTypeEnum["TargetingTypeEnvironment"] = "TARGETING_TYPE_ENVIRONMENT";
    DeleteAssignedTargetingOptionsRequestTargetingTypeEnum["TargetingTypeCarrierAndIsp"] = "TARGETING_TYPE_CARRIER_AND_ISP";
    DeleteAssignedTargetingOptionsRequestTargetingTypeEnum["TargetingTypeOperatingSystem"] = "TARGETING_TYPE_OPERATING_SYSTEM";
    DeleteAssignedTargetingOptionsRequestTargetingTypeEnum["TargetingTypeDeviceMakeModel"] = "TARGETING_TYPE_DEVICE_MAKE_MODEL";
    DeleteAssignedTargetingOptionsRequestTargetingTypeEnum["TargetingTypeKeyword"] = "TARGETING_TYPE_KEYWORD";
    DeleteAssignedTargetingOptionsRequestTargetingTypeEnum["TargetingTypeNegativeKeywordList"] = "TARGETING_TYPE_NEGATIVE_KEYWORD_LIST";
    DeleteAssignedTargetingOptionsRequestTargetingTypeEnum["TargetingTypeViewability"] = "TARGETING_TYPE_VIEWABILITY";
    DeleteAssignedTargetingOptionsRequestTargetingTypeEnum["TargetingTypeCategory"] = "TARGETING_TYPE_CATEGORY";
    DeleteAssignedTargetingOptionsRequestTargetingTypeEnum["TargetingTypeInventorySource"] = "TARGETING_TYPE_INVENTORY_SOURCE";
    DeleteAssignedTargetingOptionsRequestTargetingTypeEnum["TargetingTypeLanguage"] = "TARGETING_TYPE_LANGUAGE";
    DeleteAssignedTargetingOptionsRequestTargetingTypeEnum["TargetingTypeAuthorizedSellerStatus"] = "TARGETING_TYPE_AUTHORIZED_SELLER_STATUS";
    DeleteAssignedTargetingOptionsRequestTargetingTypeEnum["TargetingTypeGeoRegion"] = "TARGETING_TYPE_GEO_REGION";
    DeleteAssignedTargetingOptionsRequestTargetingTypeEnum["TargetingTypeInventorySourceGroup"] = "TARGETING_TYPE_INVENTORY_SOURCE_GROUP";
    DeleteAssignedTargetingOptionsRequestTargetingTypeEnum["TargetingTypeExchange"] = "TARGETING_TYPE_EXCHANGE";
    DeleteAssignedTargetingOptionsRequestTargetingTypeEnum["TargetingTypeSubExchange"] = "TARGETING_TYPE_SUB_EXCHANGE";
    DeleteAssignedTargetingOptionsRequestTargetingTypeEnum["TargetingTypePoi"] = "TARGETING_TYPE_POI";
    DeleteAssignedTargetingOptionsRequestTargetingTypeEnum["TargetingTypeBusinessChain"] = "TARGETING_TYPE_BUSINESS_CHAIN";
    DeleteAssignedTargetingOptionsRequestTargetingTypeEnum["TargetingTypeContentDuration"] = "TARGETING_TYPE_CONTENT_DURATION";
    DeleteAssignedTargetingOptionsRequestTargetingTypeEnum["TargetingTypeContentStreamType"] = "TARGETING_TYPE_CONTENT_STREAM_TYPE";
    DeleteAssignedTargetingOptionsRequestTargetingTypeEnum["TargetingTypeNativeContentPosition"] = "TARGETING_TYPE_NATIVE_CONTENT_POSITION";
    DeleteAssignedTargetingOptionsRequestTargetingTypeEnum["TargetingTypeOmid"] = "TARGETING_TYPE_OMID";
    DeleteAssignedTargetingOptionsRequestTargetingTypeEnum["TargetingTypeAudioContentType"] = "TARGETING_TYPE_AUDIO_CONTENT_TYPE";
    DeleteAssignedTargetingOptionsRequestTargetingTypeEnum["TargetingTypeContentGenre"] = "TARGETING_TYPE_CONTENT_GENRE";
})(DeleteAssignedTargetingOptionsRequestTargetingTypeEnum || (DeleteAssignedTargetingOptionsRequestTargetingTypeEnum = {}));
// DeleteAssignedTargetingOptionsRequest
/**
 * A request listing which assigned targeting options of a given targeting type should be deleted.
**/
var DeleteAssignedTargetingOptionsRequest = /** @class */ (function (_super) {
    __extends(DeleteAssignedTargetingOptionsRequest, _super);
    function DeleteAssignedTargetingOptionsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=assignedTargetingOptionIds" }),
        __metadata("design:type", Array)
    ], DeleteAssignedTargetingOptionsRequest.prototype, "assignedTargetingOptionIds", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=targetingType" }),
        __metadata("design:type", String)
    ], DeleteAssignedTargetingOptionsRequest.prototype, "targetingType", void 0);
    return DeleteAssignedTargetingOptionsRequest;
}(SpeakeasyBase));
export { DeleteAssignedTargetingOptionsRequest };
