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
import { DimensionValue } from "./dimensionvalue";
import { ListPopulationRule } from "./listpopulationrule";
export var RemarketingListListSourceEnum;
(function (RemarketingListListSourceEnum) {
    RemarketingListListSourceEnum["RemarketingListSourceOther"] = "REMARKETING_LIST_SOURCE_OTHER";
    RemarketingListListSourceEnum["RemarketingListSourceAdx"] = "REMARKETING_LIST_SOURCE_ADX";
    RemarketingListListSourceEnum["RemarketingListSourceDfp"] = "REMARKETING_LIST_SOURCE_DFP";
    RemarketingListListSourceEnum["RemarketingListSourceXfp"] = "REMARKETING_LIST_SOURCE_XFP";
    RemarketingListListSourceEnum["RemarketingListSourceDfa"] = "REMARKETING_LIST_SOURCE_DFA";
    RemarketingListListSourceEnum["RemarketingListSourceGa"] = "REMARKETING_LIST_SOURCE_GA";
    RemarketingListListSourceEnum["RemarketingListSourceYoutube"] = "REMARKETING_LIST_SOURCE_YOUTUBE";
    RemarketingListListSourceEnum["RemarketingListSourceDbm"] = "REMARKETING_LIST_SOURCE_DBM";
    RemarketingListListSourceEnum["RemarketingListSourceGplus"] = "REMARKETING_LIST_SOURCE_GPLUS";
    RemarketingListListSourceEnum["RemarketingListSourceDmp"] = "REMARKETING_LIST_SOURCE_DMP";
    RemarketingListListSourceEnum["RemarketingListSourcePlayStore"] = "REMARKETING_LIST_SOURCE_PLAY_STORE";
})(RemarketingListListSourceEnum || (RemarketingListListSourceEnum = {}));
// RemarketingList
/**
 * Contains properties of a remarketing list. Remarketing enables you to create lists of users who have performed specific actions on a site, then target ads to members of those lists. This resource can be used to manage remarketing lists that are owned by your advertisers. To see all remarketing lists that are visible to your advertisers, including those that are shared to your advertiser or account, use the TargetableRemarketingLists resource.
**/
var RemarketingList = /** @class */ (function (_super) {
    __extends(RemarketingList, _super);
    function RemarketingList() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=accountId" }),
        __metadata("design:type", String)
    ], RemarketingList.prototype, "accountId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=active" }),
        __metadata("design:type", Boolean)
    ], RemarketingList.prototype, "active", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=advertiserId" }),
        __metadata("design:type", String)
    ], RemarketingList.prototype, "advertiserId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=advertiserIdDimensionValue" }),
        __metadata("design:type", DimensionValue)
    ], RemarketingList.prototype, "advertiserIdDimensionValue", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], RemarketingList.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], RemarketingList.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=kind" }),
        __metadata("design:type", String)
    ], RemarketingList.prototype, "kind", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=lifeSpan" }),
        __metadata("design:type", String)
    ], RemarketingList.prototype, "lifeSpan", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=listPopulationRule" }),
        __metadata("design:type", ListPopulationRule)
    ], RemarketingList.prototype, "listPopulationRule", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=listSize" }),
        __metadata("design:type", String)
    ], RemarketingList.prototype, "listSize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=listSource" }),
        __metadata("design:type", String)
    ], RemarketingList.prototype, "listSource", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], RemarketingList.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=subaccountId" }),
        __metadata("design:type", String)
    ], RemarketingList.prototype, "subaccountId", void 0);
    return RemarketingList;
}(SpeakeasyBase));
export { RemarketingList };
