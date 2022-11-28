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
import { HeldAccount } from "./heldaccount";
import { HeldOrgUnit } from "./heldorgunit";
import { CorpusQuery } from "./corpusquery";
export var HoldCorpusEnum;
(function (HoldCorpusEnum) {
    HoldCorpusEnum["CorpusTypeUnspecified"] = "CORPUS_TYPE_UNSPECIFIED";
    HoldCorpusEnum["Drive"] = "DRIVE";
    HoldCorpusEnum["Mail"] = "MAIL";
    HoldCorpusEnum["Groups"] = "GROUPS";
    HoldCorpusEnum["HangoutsChat"] = "HANGOUTS_CHAT";
    HoldCorpusEnum["Voice"] = "VOICE";
})(HoldCorpusEnum || (HoldCorpusEnum = {}));
// Hold
/**
 * A hold. A hold prevents the specified Google Workspace service from purging data for specific accounts or all members of an organizational unit. To work with Vault resources, the account must have the [required Vault privileges] (https://support.google.com/vault/answer/2799699) and access to the matter. To access a matter, the account must have created the matter, have the matter shared with them, or have the **View All Matters** privilege.
**/
var Hold = /** @class */ (function (_super) {
    __extends(Hold, _super);
    function Hold() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=accounts", elemType: HeldAccount }),
        __metadata("design:type", Array)
    ], Hold.prototype, "accounts", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=corpus" }),
        __metadata("design:type", String)
    ], Hold.prototype, "corpus", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=holdId" }),
        __metadata("design:type", String)
    ], Hold.prototype, "holdId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], Hold.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=orgUnit" }),
        __metadata("design:type", HeldOrgUnit)
    ], Hold.prototype, "orgUnit", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=query" }),
        __metadata("design:type", CorpusQuery)
    ], Hold.prototype, "query", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=updateTime" }),
        __metadata("design:type", String)
    ], Hold.prototype, "updateTime", void 0);
    return Hold;
}(SpeakeasyBase));
export { Hold };
