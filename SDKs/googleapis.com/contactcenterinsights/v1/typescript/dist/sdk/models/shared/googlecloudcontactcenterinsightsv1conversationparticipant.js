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
export var GoogleCloudContactcenterinsightsV1ConversationParticipantRoleEnum;
(function (GoogleCloudContactcenterinsightsV1ConversationParticipantRoleEnum) {
    GoogleCloudContactcenterinsightsV1ConversationParticipantRoleEnum["RoleUnspecified"] = "ROLE_UNSPECIFIED";
    GoogleCloudContactcenterinsightsV1ConversationParticipantRoleEnum["HumanAgent"] = "HUMAN_AGENT";
    GoogleCloudContactcenterinsightsV1ConversationParticipantRoleEnum["AutomatedAgent"] = "AUTOMATED_AGENT";
    GoogleCloudContactcenterinsightsV1ConversationParticipantRoleEnum["EndUser"] = "END_USER";
    GoogleCloudContactcenterinsightsV1ConversationParticipantRoleEnum["AnyAgent"] = "ANY_AGENT";
})(GoogleCloudContactcenterinsightsV1ConversationParticipantRoleEnum || (GoogleCloudContactcenterinsightsV1ConversationParticipantRoleEnum = {}));
// GoogleCloudContactcenterinsightsV1ConversationParticipant
/**
 * The call participant speaking for a given utterance.
**/
var GoogleCloudContactcenterinsightsV1ConversationParticipant = /** @class */ (function (_super) {
    __extends(GoogleCloudContactcenterinsightsV1ConversationParticipant, _super);
    function GoogleCloudContactcenterinsightsV1ConversationParticipant() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=dialogflowParticipant" }),
        __metadata("design:type", String)
    ], GoogleCloudContactcenterinsightsV1ConversationParticipant.prototype, "dialogflowParticipant", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=dialogflowParticipantName" }),
        __metadata("design:type", String)
    ], GoogleCloudContactcenterinsightsV1ConversationParticipant.prototype, "dialogflowParticipantName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=obfuscatedExternalUserId" }),
        __metadata("design:type", String)
    ], GoogleCloudContactcenterinsightsV1ConversationParticipant.prototype, "obfuscatedExternalUserId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=role" }),
        __metadata("design:type", String)
    ], GoogleCloudContactcenterinsightsV1ConversationParticipant.prototype, "role", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=userId" }),
        __metadata("design:type", String)
    ], GoogleCloudContactcenterinsightsV1ConversationParticipant.prototype, "userId", void 0);
    return GoogleCloudContactcenterinsightsV1ConversationParticipant;
}(SpeakeasyBase));
export { GoogleCloudContactcenterinsightsV1ConversationParticipant };
