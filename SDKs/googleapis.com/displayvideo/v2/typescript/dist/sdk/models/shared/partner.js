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
import { PartnerAdServerConfig } from "./partneradserverconfig";
import { PartnerDataAccessConfig } from "./partnerdataaccessconfig";
import { ExchangeConfig } from "./exchangeconfig";
import { PartnerGeneralConfig } from "./partnergeneralconfig";
export var PartnerEntityStatusEnum;
(function (PartnerEntityStatusEnum) {
    PartnerEntityStatusEnum["EntityStatusUnspecified"] = "ENTITY_STATUS_UNSPECIFIED";
    PartnerEntityStatusEnum["EntityStatusActive"] = "ENTITY_STATUS_ACTIVE";
    PartnerEntityStatusEnum["EntityStatusArchived"] = "ENTITY_STATUS_ARCHIVED";
    PartnerEntityStatusEnum["EntityStatusDraft"] = "ENTITY_STATUS_DRAFT";
    PartnerEntityStatusEnum["EntityStatusPaused"] = "ENTITY_STATUS_PAUSED";
    PartnerEntityStatusEnum["EntityStatusScheduledForDeletion"] = "ENTITY_STATUS_SCHEDULED_FOR_DELETION";
})(PartnerEntityStatusEnum || (PartnerEntityStatusEnum = {}));
// Partner
/**
 * A single partner in Display & Video 360 (DV360).
**/
var Partner = /** @class */ (function (_super) {
    __extends(Partner, _super);
    function Partner() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=adServerConfig" }),
        __metadata("design:type", PartnerAdServerConfig)
    ], Partner.prototype, "adServerConfig", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=dataAccessConfig" }),
        __metadata("design:type", PartnerDataAccessConfig)
    ], Partner.prototype, "dataAccessConfig", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=displayName" }),
        __metadata("design:type", String)
    ], Partner.prototype, "displayName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=entityStatus" }),
        __metadata("design:type", String)
    ], Partner.prototype, "entityStatus", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=exchangeConfig" }),
        __metadata("design:type", ExchangeConfig)
    ], Partner.prototype, "exchangeConfig", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=generalConfig" }),
        __metadata("design:type", PartnerGeneralConfig)
    ], Partner.prototype, "generalConfig", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], Partner.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=partnerId" }),
        __metadata("design:type", String)
    ], Partner.prototype, "partnerId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=updateTime" }),
        __metadata("design:type", String)
    ], Partner.prototype, "updateTime", void 0);
    return Partner;
}(SpeakeasyBase));
export { Partner };
