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
import { CampaignManagerIds } from "./campaignmanagerids";
import { Dv3Ids } from "./dv3ids";
export var CustomEventInsertInsertEventTypeEnum;
(function (CustomEventInsertInsertEventTypeEnum) {
    CustomEventInsertInsertEventTypeEnum["Unknown"] = "UNKNOWN";
    CustomEventInsertInsertEventTypeEnum["Impression"] = "IMPRESSION";
    CustomEventInsertInsertEventTypeEnum["Click"] = "CLICK";
})(CustomEventInsertInsertEventTypeEnum || (CustomEventInsertInsertEventTypeEnum = {}));
// CustomEventInsert
/**
 * Custom event to be inserted.
**/
var CustomEventInsert = /** @class */ (function (_super) {
    __extends(CustomEventInsert, _super);
    function CustomEventInsert() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=cmDimensions" }),
        __metadata("design:type", CampaignManagerIds)
    ], CustomEventInsert.prototype, "cmDimensions", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=dv3Dimensions" }),
        __metadata("design:type", Dv3Ids)
    ], CustomEventInsert.prototype, "dv3Dimensions", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=insertEventType" }),
        __metadata("design:type", String)
    ], CustomEventInsert.prototype, "insertEventType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=kind" }),
        __metadata("design:type", String)
    ], CustomEventInsert.prototype, "kind", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=matchId" }),
        __metadata("design:type", String)
    ], CustomEventInsert.prototype, "matchId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=mobileDeviceId" }),
        __metadata("design:type", String)
    ], CustomEventInsert.prototype, "mobileDeviceId", void 0);
    return CustomEventInsert;
}(SpeakeasyBase));
export { CustomEventInsert };
