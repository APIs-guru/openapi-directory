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
import { BillAbstract } from "./billabstract";
import { BillAction } from "./billaction";
import { BillDocumentOrVersion } from "./billdocumentorversion";
import { Organization } from "./organization";
import { CompactJurisdiction } from "./compactjurisdiction";
import { BillIdentifier } from "./billidentifier";
import { BillTitle } from "./billtitle";
import { Link } from "./link";
import { BillSponsorship } from "./billsponsorship";
import { VoteEvent } from "./voteevent";
var Bill = /** @class */ (function (_super) {
    __extends(Bill, _super);
    function Bill() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=abstracts", elemType: BillAbstract }),
        __metadata("design:type", Array)
    ], Bill.prototype, "abstracts", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=actions", elemType: BillAction }),
        __metadata("design:type", Array)
    ], Bill.prototype, "actions", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=classification" }),
        __metadata("design:type", Array)
    ], Bill.prototype, "classification", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=created_at" }),
        __metadata("design:type", Date)
    ], Bill.prototype, "createdAt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=documents", elemType: BillDocumentOrVersion }),
        __metadata("design:type", Array)
    ], Bill.prototype, "documents", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=extras" }),
        __metadata("design:type", Map)
    ], Bill.prototype, "extras", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=first_action_date" }),
        __metadata("design:type", String)
    ], Bill.prototype, "firstActionDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=from_organization" }),
        __metadata("design:type", Organization)
    ], Bill.prototype, "fromOrganization", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], Bill.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=identifier" }),
        __metadata("design:type", String)
    ], Bill.prototype, "identifier", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=jurisdiction" }),
        __metadata("design:type", CompactJurisdiction)
    ], Bill.prototype, "jurisdiction", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=latest_action_date" }),
        __metadata("design:type", String)
    ], Bill.prototype, "latestActionDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=latest_action_description" }),
        __metadata("design:type", String)
    ], Bill.prototype, "latestActionDescription", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=latest_passage_date" }),
        __metadata("design:type", String)
    ], Bill.prototype, "latestPassageDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=openstates_url" }),
        __metadata("design:type", String)
    ], Bill.prototype, "openstatesUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=other_identifiers", elemType: BillIdentifier }),
        __metadata("design:type", Array)
    ], Bill.prototype, "otherIdentifiers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=other_titles", elemType: BillTitle }),
        __metadata("design:type", Array)
    ], Bill.prototype, "otherTitles", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=session" }),
        __metadata("design:type", String)
    ], Bill.prototype, "session", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sources", elemType: Link }),
        __metadata("design:type", Array)
    ], Bill.prototype, "sources", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sponsorships", elemType: BillSponsorship }),
        __metadata("design:type", Array)
    ], Bill.prototype, "sponsorships", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=subject" }),
        __metadata("design:type", Array)
    ], Bill.prototype, "subject", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=title" }),
        __metadata("design:type", String)
    ], Bill.prototype, "title", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=updated_at" }),
        __metadata("design:type", Date)
    ], Bill.prototype, "updatedAt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=versions", elemType: BillDocumentOrVersion }),
        __metadata("design:type", Array)
    ], Bill.prototype, "versions", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=votes", elemType: VoteEvent }),
        __metadata("design:type", Array)
    ], Bill.prototype, "votes", void 0);
    return Bill;
}(SpeakeasyBase));
export { Bill };
