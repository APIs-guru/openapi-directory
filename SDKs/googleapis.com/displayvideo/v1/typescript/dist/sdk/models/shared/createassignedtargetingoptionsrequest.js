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
import { AssignedTargetingOptionInput } from "./assignedtargetingoption";
export var CreateAssignedTargetingOptionsRequestTargetingTypeEnum;
(function (CreateAssignedTargetingOptionsRequestTargetingTypeEnum) {
    CreateAssignedTargetingOptionsRequestTargetingTypeEnum["TargetingTypeUnspecified"] = "TARGETING_TYPE_UNSPECIFIED";
    CreateAssignedTargetingOptionsRequestTargetingTypeEnum["TargetingTypeChannel"] = "TARGETING_TYPE_CHANNEL";
    CreateAssignedTargetingOptionsRequestTargetingTypeEnum["TargetingTypeAppCategory"] = "TARGETING_TYPE_APP_CATEGORY";
    CreateAssignedTargetingOptionsRequestTargetingTypeEnum["TargetingTypeApp"] = "TARGETING_TYPE_APP";
    CreateAssignedTargetingOptionsRequestTargetingTypeEnum["TargetingTypeUrl"] = "TARGETING_TYPE_URL";
    CreateAssignedTargetingOptionsRequestTargetingTypeEnum["TargetingTypeDayAndTime"] = "TARGETING_TYPE_DAY_AND_TIME";
    CreateAssignedTargetingOptionsRequestTargetingTypeEnum["TargetingTypeAgeRange"] = "TARGETING_TYPE_AGE_RANGE";
    CreateAssignedTargetingOptionsRequestTargetingTypeEnum["TargetingTypeRegionalLocationList"] = "TARGETING_TYPE_REGIONAL_LOCATION_LIST";
    CreateAssignedTargetingOptionsRequestTargetingTypeEnum["TargetingTypeProximityLocationList"] = "TARGETING_TYPE_PROXIMITY_LOCATION_LIST";
    CreateAssignedTargetingOptionsRequestTargetingTypeEnum["TargetingTypeGender"] = "TARGETING_TYPE_GENDER";
    CreateAssignedTargetingOptionsRequestTargetingTypeEnum["TargetingTypeVideoPlayerSize"] = "TARGETING_TYPE_VIDEO_PLAYER_SIZE";
    CreateAssignedTargetingOptionsRequestTargetingTypeEnum["TargetingTypeUserRewardedContent"] = "TARGETING_TYPE_USER_REWARDED_CONTENT";
    CreateAssignedTargetingOptionsRequestTargetingTypeEnum["TargetingTypeParentalStatus"] = "TARGETING_TYPE_PARENTAL_STATUS";
    CreateAssignedTargetingOptionsRequestTargetingTypeEnum["TargetingTypeContentInstreamPosition"] = "TARGETING_TYPE_CONTENT_INSTREAM_POSITION";
    CreateAssignedTargetingOptionsRequestTargetingTypeEnum["TargetingTypeContentOutstreamPosition"] = "TARGETING_TYPE_CONTENT_OUTSTREAM_POSITION";
    CreateAssignedTargetingOptionsRequestTargetingTypeEnum["TargetingTypeDeviceType"] = "TARGETING_TYPE_DEVICE_TYPE";
    CreateAssignedTargetingOptionsRequestTargetingTypeEnum["TargetingTypeAudienceGroup"] = "TARGETING_TYPE_AUDIENCE_GROUP";
    CreateAssignedTargetingOptionsRequestTargetingTypeEnum["TargetingTypeBrowser"] = "TARGETING_TYPE_BROWSER";
    CreateAssignedTargetingOptionsRequestTargetingTypeEnum["TargetingTypeHouseholdIncome"] = "TARGETING_TYPE_HOUSEHOLD_INCOME";
    CreateAssignedTargetingOptionsRequestTargetingTypeEnum["TargetingTypeOnScreenPosition"] = "TARGETING_TYPE_ON_SCREEN_POSITION";
    CreateAssignedTargetingOptionsRequestTargetingTypeEnum["TargetingTypeThirdPartyVerifier"] = "TARGETING_TYPE_THIRD_PARTY_VERIFIER";
    CreateAssignedTargetingOptionsRequestTargetingTypeEnum["TargetingTypeDigitalContentLabelExclusion"] = "TARGETING_TYPE_DIGITAL_CONTENT_LABEL_EXCLUSION";
    CreateAssignedTargetingOptionsRequestTargetingTypeEnum["TargetingTypeSensitiveCategoryExclusion"] = "TARGETING_TYPE_SENSITIVE_CATEGORY_EXCLUSION";
    CreateAssignedTargetingOptionsRequestTargetingTypeEnum["TargetingTypeEnvironment"] = "TARGETING_TYPE_ENVIRONMENT";
    CreateAssignedTargetingOptionsRequestTargetingTypeEnum["TargetingTypeCarrierAndIsp"] = "TARGETING_TYPE_CARRIER_AND_ISP";
    CreateAssignedTargetingOptionsRequestTargetingTypeEnum["TargetingTypeOperatingSystem"] = "TARGETING_TYPE_OPERATING_SYSTEM";
    CreateAssignedTargetingOptionsRequestTargetingTypeEnum["TargetingTypeDeviceMakeModel"] = "TARGETING_TYPE_DEVICE_MAKE_MODEL";
    CreateAssignedTargetingOptionsRequestTargetingTypeEnum["TargetingTypeKeyword"] = "TARGETING_TYPE_KEYWORD";
    CreateAssignedTargetingOptionsRequestTargetingTypeEnum["TargetingTypeNegativeKeywordList"] = "TARGETING_TYPE_NEGATIVE_KEYWORD_LIST";
    CreateAssignedTargetingOptionsRequestTargetingTypeEnum["TargetingTypeViewability"] = "TARGETING_TYPE_VIEWABILITY";
    CreateAssignedTargetingOptionsRequestTargetingTypeEnum["TargetingTypeCategory"] = "TARGETING_TYPE_CATEGORY";
    CreateAssignedTargetingOptionsRequestTargetingTypeEnum["TargetingTypeInventorySource"] = "TARGETING_TYPE_INVENTORY_SOURCE";
    CreateAssignedTargetingOptionsRequestTargetingTypeEnum["TargetingTypeLanguage"] = "TARGETING_TYPE_LANGUAGE";
    CreateAssignedTargetingOptionsRequestTargetingTypeEnum["TargetingTypeAuthorizedSellerStatus"] = "TARGETING_TYPE_AUTHORIZED_SELLER_STATUS";
    CreateAssignedTargetingOptionsRequestTargetingTypeEnum["TargetingTypeGeoRegion"] = "TARGETING_TYPE_GEO_REGION";
    CreateAssignedTargetingOptionsRequestTargetingTypeEnum["TargetingTypeInventorySourceGroup"] = "TARGETING_TYPE_INVENTORY_SOURCE_GROUP";
    CreateAssignedTargetingOptionsRequestTargetingTypeEnum["TargetingTypeExchange"] = "TARGETING_TYPE_EXCHANGE";
    CreateAssignedTargetingOptionsRequestTargetingTypeEnum["TargetingTypeSubExchange"] = "TARGETING_TYPE_SUB_EXCHANGE";
    CreateAssignedTargetingOptionsRequestTargetingTypeEnum["TargetingTypePoi"] = "TARGETING_TYPE_POI";
    CreateAssignedTargetingOptionsRequestTargetingTypeEnum["TargetingTypeBusinessChain"] = "TARGETING_TYPE_BUSINESS_CHAIN";
    CreateAssignedTargetingOptionsRequestTargetingTypeEnum["TargetingTypeContentDuration"] = "TARGETING_TYPE_CONTENT_DURATION";
    CreateAssignedTargetingOptionsRequestTargetingTypeEnum["TargetingTypeContentStreamType"] = "TARGETING_TYPE_CONTENT_STREAM_TYPE";
    CreateAssignedTargetingOptionsRequestTargetingTypeEnum["TargetingTypeNativeContentPosition"] = "TARGETING_TYPE_NATIVE_CONTENT_POSITION";
    CreateAssignedTargetingOptionsRequestTargetingTypeEnum["TargetingTypeOmid"] = "TARGETING_TYPE_OMID";
    CreateAssignedTargetingOptionsRequestTargetingTypeEnum["TargetingTypeAudioContentType"] = "TARGETING_TYPE_AUDIO_CONTENT_TYPE";
    CreateAssignedTargetingOptionsRequestTargetingTypeEnum["TargetingTypeContentGenre"] = "TARGETING_TYPE_CONTENT_GENRE";
})(CreateAssignedTargetingOptionsRequestTargetingTypeEnum || (CreateAssignedTargetingOptionsRequestTargetingTypeEnum = {}));
// CreateAssignedTargetingOptionsRequestInput
/**
 * A request listing which assigned targeting options of a given targeting type should be created and added.
**/
var CreateAssignedTargetingOptionsRequestInput = /** @class */ (function (_super) {
    __extends(CreateAssignedTargetingOptionsRequestInput, _super);
    function CreateAssignedTargetingOptionsRequestInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=assignedTargetingOptions", elemType: AssignedTargetingOptionInput }),
        __metadata("design:type", Array)
    ], CreateAssignedTargetingOptionsRequestInput.prototype, "assignedTargetingOptions", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=targetingType" }),
        __metadata("design:type", String)
    ], CreateAssignedTargetingOptionsRequestInput.prototype, "targetingType", void 0);
    return CreateAssignedTargetingOptionsRequestInput;
}(SpeakeasyBase));
export { CreateAssignedTargetingOptionsRequestInput };
