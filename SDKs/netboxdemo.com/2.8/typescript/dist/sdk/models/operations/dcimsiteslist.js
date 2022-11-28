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
var DcimSitesListQueryParams = /** @class */ (function (_super) {
    __extends(DcimSitesListQueryParams, _super);
    function DcimSitesListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=asn" }),
        __metadata("design:type", String)
    ], DcimSitesListQueryParams.prototype, "asn", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=asn__gt" }),
        __metadata("design:type", String)
    ], DcimSitesListQueryParams.prototype, "asnGt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=asn__gte" }),
        __metadata("design:type", String)
    ], DcimSitesListQueryParams.prototype, "asnGte", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=asn__lt" }),
        __metadata("design:type", String)
    ], DcimSitesListQueryParams.prototype, "asnLt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=asn__lte" }),
        __metadata("design:type", String)
    ], DcimSitesListQueryParams.prototype, "asnLte", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=asn__n" }),
        __metadata("design:type", String)
    ], DcimSitesListQueryParams.prototype, "asnN", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=contact_email" }),
        __metadata("design:type", String)
    ], DcimSitesListQueryParams.prototype, "contactEmail", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=contact_email__ic" }),
        __metadata("design:type", String)
    ], DcimSitesListQueryParams.prototype, "contactEmailIc", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=contact_email__ie" }),
        __metadata("design:type", String)
    ], DcimSitesListQueryParams.prototype, "contactEmailIe", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=contact_email__iew" }),
        __metadata("design:type", String)
    ], DcimSitesListQueryParams.prototype, "contactEmailIew", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=contact_email__isw" }),
        __metadata("design:type", String)
    ], DcimSitesListQueryParams.prototype, "contactEmailIsw", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=contact_email__n" }),
        __metadata("design:type", String)
    ], DcimSitesListQueryParams.prototype, "contactEmailN", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=contact_email__nic" }),
        __metadata("design:type", String)
    ], DcimSitesListQueryParams.prototype, "contactEmailNic", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=contact_email__nie" }),
        __metadata("design:type", String)
    ], DcimSitesListQueryParams.prototype, "contactEmailNie", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=contact_email__niew" }),
        __metadata("design:type", String)
    ], DcimSitesListQueryParams.prototype, "contactEmailNiew", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=contact_email__nisw" }),
        __metadata("design:type", String)
    ], DcimSitesListQueryParams.prototype, "contactEmailNisw", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=contact_name" }),
        __metadata("design:type", String)
    ], DcimSitesListQueryParams.prototype, "contactName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=contact_name__ic" }),
        __metadata("design:type", String)
    ], DcimSitesListQueryParams.prototype, "contactNameIc", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=contact_name__ie" }),
        __metadata("design:type", String)
    ], DcimSitesListQueryParams.prototype, "contactNameIe", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=contact_name__iew" }),
        __metadata("design:type", String)
    ], DcimSitesListQueryParams.prototype, "contactNameIew", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=contact_name__isw" }),
        __metadata("design:type", String)
    ], DcimSitesListQueryParams.prototype, "contactNameIsw", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=contact_name__n" }),
        __metadata("design:type", String)
    ], DcimSitesListQueryParams.prototype, "contactNameN", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=contact_name__nic" }),
        __metadata("design:type", String)
    ], DcimSitesListQueryParams.prototype, "contactNameNic", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=contact_name__nie" }),
        __metadata("design:type", String)
    ], DcimSitesListQueryParams.prototype, "contactNameNie", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=contact_name__niew" }),
        __metadata("design:type", String)
    ], DcimSitesListQueryParams.prototype, "contactNameNiew", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=contact_name__nisw" }),
        __metadata("design:type", String)
    ], DcimSitesListQueryParams.prototype, "contactNameNisw", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=contact_phone" }),
        __metadata("design:type", String)
    ], DcimSitesListQueryParams.prototype, "contactPhone", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=contact_phone__ic" }),
        __metadata("design:type", String)
    ], DcimSitesListQueryParams.prototype, "contactPhoneIc", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=contact_phone__ie" }),
        __metadata("design:type", String)
    ], DcimSitesListQueryParams.prototype, "contactPhoneIe", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=contact_phone__iew" }),
        __metadata("design:type", String)
    ], DcimSitesListQueryParams.prototype, "contactPhoneIew", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=contact_phone__isw" }),
        __metadata("design:type", String)
    ], DcimSitesListQueryParams.prototype, "contactPhoneIsw", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=contact_phone__n" }),
        __metadata("design:type", String)
    ], DcimSitesListQueryParams.prototype, "contactPhoneN", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=contact_phone__nic" }),
        __metadata("design:type", String)
    ], DcimSitesListQueryParams.prototype, "contactPhoneNic", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=contact_phone__nie" }),
        __metadata("design:type", String)
    ], DcimSitesListQueryParams.prototype, "contactPhoneNie", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=contact_phone__niew" }),
        __metadata("design:type", String)
    ], DcimSitesListQueryParams.prototype, "contactPhoneNiew", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=contact_phone__nisw" }),
        __metadata("design:type", String)
    ], DcimSitesListQueryParams.prototype, "contactPhoneNisw", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=created" }),
        __metadata("design:type", String)
    ], DcimSitesListQueryParams.prototype, "created", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=created__gte" }),
        __metadata("design:type", String)
    ], DcimSitesListQueryParams.prototype, "createdGte", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=created__lte" }),
        __metadata("design:type", String)
    ], DcimSitesListQueryParams.prototype, "createdLte", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=facility" }),
        __metadata("design:type", String)
    ], DcimSitesListQueryParams.prototype, "facility", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=facility__ic" }),
        __metadata("design:type", String)
    ], DcimSitesListQueryParams.prototype, "facilityIc", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=facility__ie" }),
        __metadata("design:type", String)
    ], DcimSitesListQueryParams.prototype, "facilityIe", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=facility__iew" }),
        __metadata("design:type", String)
    ], DcimSitesListQueryParams.prototype, "facilityIew", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=facility__isw" }),
        __metadata("design:type", String)
    ], DcimSitesListQueryParams.prototype, "facilityIsw", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=facility__n" }),
        __metadata("design:type", String)
    ], DcimSitesListQueryParams.prototype, "facilityN", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=facility__nic" }),
        __metadata("design:type", String)
    ], DcimSitesListQueryParams.prototype, "facilityNic", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=facility__nie" }),
        __metadata("design:type", String)
    ], DcimSitesListQueryParams.prototype, "facilityNie", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=facility__niew" }),
        __metadata("design:type", String)
    ], DcimSitesListQueryParams.prototype, "facilityNiew", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=facility__nisw" }),
        __metadata("design:type", String)
    ], DcimSitesListQueryParams.prototype, "facilityNisw", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=id" }),
        __metadata("design:type", String)
    ], DcimSitesListQueryParams.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=id__gt" }),
        __metadata("design:type", String)
    ], DcimSitesListQueryParams.prototype, "idGt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=id__gte" }),
        __metadata("design:type", String)
    ], DcimSitesListQueryParams.prototype, "idGte", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=id__lt" }),
        __metadata("design:type", String)
    ], DcimSitesListQueryParams.prototype, "idLt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=id__lte" }),
        __metadata("design:type", String)
    ], DcimSitesListQueryParams.prototype, "idLte", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=id__n" }),
        __metadata("design:type", String)
    ], DcimSitesListQueryParams.prototype, "idN", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=last_updated" }),
        __metadata("design:type", String)
    ], DcimSitesListQueryParams.prototype, "lastUpdated", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=last_updated__gte" }),
        __metadata("design:type", String)
    ], DcimSitesListQueryParams.prototype, "lastUpdatedGte", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=last_updated__lte" }),
        __metadata("design:type", String)
    ], DcimSitesListQueryParams.prototype, "lastUpdatedLte", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=latitude" }),
        __metadata("design:type", String)
    ], DcimSitesListQueryParams.prototype, "latitude", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=latitude__gt" }),
        __metadata("design:type", String)
    ], DcimSitesListQueryParams.prototype, "latitudeGt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=latitude__gte" }),
        __metadata("design:type", String)
    ], DcimSitesListQueryParams.prototype, "latitudeGte", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=latitude__lt" }),
        __metadata("design:type", String)
    ], DcimSitesListQueryParams.prototype, "latitudeLt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=latitude__lte" }),
        __metadata("design:type", String)
    ], DcimSitesListQueryParams.prototype, "latitudeLte", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=latitude__n" }),
        __metadata("design:type", String)
    ], DcimSitesListQueryParams.prototype, "latitudeN", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=limit" }),
        __metadata("design:type", Number)
    ], DcimSitesListQueryParams.prototype, "limit", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=longitude" }),
        __metadata("design:type", String)
    ], DcimSitesListQueryParams.prototype, "longitude", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=longitude__gt" }),
        __metadata("design:type", String)
    ], DcimSitesListQueryParams.prototype, "longitudeGt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=longitude__gte" }),
        __metadata("design:type", String)
    ], DcimSitesListQueryParams.prototype, "longitudeGte", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=longitude__lt" }),
        __metadata("design:type", String)
    ], DcimSitesListQueryParams.prototype, "longitudeLt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=longitude__lte" }),
        __metadata("design:type", String)
    ], DcimSitesListQueryParams.prototype, "longitudeLte", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=longitude__n" }),
        __metadata("design:type", String)
    ], DcimSitesListQueryParams.prototype, "longitudeN", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=name" }),
        __metadata("design:type", String)
    ], DcimSitesListQueryParams.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=name__ic" }),
        __metadata("design:type", String)
    ], DcimSitesListQueryParams.prototype, "nameIc", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=name__ie" }),
        __metadata("design:type", String)
    ], DcimSitesListQueryParams.prototype, "nameIe", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=name__iew" }),
        __metadata("design:type", String)
    ], DcimSitesListQueryParams.prototype, "nameIew", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=name__isw" }),
        __metadata("design:type", String)
    ], DcimSitesListQueryParams.prototype, "nameIsw", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=name__n" }),
        __metadata("design:type", String)
    ], DcimSitesListQueryParams.prototype, "nameN", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=name__nic" }),
        __metadata("design:type", String)
    ], DcimSitesListQueryParams.prototype, "nameNic", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=name__nie" }),
        __metadata("design:type", String)
    ], DcimSitesListQueryParams.prototype, "nameNie", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=name__niew" }),
        __metadata("design:type", String)
    ], DcimSitesListQueryParams.prototype, "nameNiew", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=name__nisw" }),
        __metadata("design:type", String)
    ], DcimSitesListQueryParams.prototype, "nameNisw", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=offset" }),
        __metadata("design:type", Number)
    ], DcimSitesListQueryParams.prototype, "offset", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=q" }),
        __metadata("design:type", String)
    ], DcimSitesListQueryParams.prototype, "q", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=region" }),
        __metadata("design:type", String)
    ], DcimSitesListQueryParams.prototype, "region", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=region__n" }),
        __metadata("design:type", String)
    ], DcimSitesListQueryParams.prototype, "regionN", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=region_id" }),
        __metadata("design:type", String)
    ], DcimSitesListQueryParams.prototype, "regionId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=region_id__n" }),
        __metadata("design:type", String)
    ], DcimSitesListQueryParams.prototype, "regionIdN", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=slug" }),
        __metadata("design:type", String)
    ], DcimSitesListQueryParams.prototype, "slug", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=slug__ic" }),
        __metadata("design:type", String)
    ], DcimSitesListQueryParams.prototype, "slugIc", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=slug__ie" }),
        __metadata("design:type", String)
    ], DcimSitesListQueryParams.prototype, "slugIe", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=slug__iew" }),
        __metadata("design:type", String)
    ], DcimSitesListQueryParams.prototype, "slugIew", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=slug__isw" }),
        __metadata("design:type", String)
    ], DcimSitesListQueryParams.prototype, "slugIsw", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=slug__n" }),
        __metadata("design:type", String)
    ], DcimSitesListQueryParams.prototype, "slugN", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=slug__nic" }),
        __metadata("design:type", String)
    ], DcimSitesListQueryParams.prototype, "slugNic", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=slug__nie" }),
        __metadata("design:type", String)
    ], DcimSitesListQueryParams.prototype, "slugNie", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=slug__niew" }),
        __metadata("design:type", String)
    ], DcimSitesListQueryParams.prototype, "slugNiew", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=slug__nisw" }),
        __metadata("design:type", String)
    ], DcimSitesListQueryParams.prototype, "slugNisw", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=status" }),
        __metadata("design:type", String)
    ], DcimSitesListQueryParams.prototype, "status", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=status__n" }),
        __metadata("design:type", String)
    ], DcimSitesListQueryParams.prototype, "statusN", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=tag" }),
        __metadata("design:type", String)
    ], DcimSitesListQueryParams.prototype, "tag", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=tag__n" }),
        __metadata("design:type", String)
    ], DcimSitesListQueryParams.prototype, "tagN", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=tenant" }),
        __metadata("design:type", String)
    ], DcimSitesListQueryParams.prototype, "tenant", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=tenant__n" }),
        __metadata("design:type", String)
    ], DcimSitesListQueryParams.prototype, "tenantN", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=tenant_group" }),
        __metadata("design:type", String)
    ], DcimSitesListQueryParams.prototype, "tenantGroup", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=tenant_group__n" }),
        __metadata("design:type", String)
    ], DcimSitesListQueryParams.prototype, "tenantGroupN", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=tenant_group_id" }),
        __metadata("design:type", String)
    ], DcimSitesListQueryParams.prototype, "tenantGroupId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=tenant_group_id__n" }),
        __metadata("design:type", String)
    ], DcimSitesListQueryParams.prototype, "tenantGroupIdN", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=tenant_id" }),
        __metadata("design:type", String)
    ], DcimSitesListQueryParams.prototype, "tenantId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=tenant_id__n" }),
        __metadata("design:type", String)
    ], DcimSitesListQueryParams.prototype, "tenantIdN", void 0);
    return DcimSitesListQueryParams;
}(SpeakeasyBase));
export { DcimSitesListQueryParams };
var DcimSitesList200ApplicationJson = /** @class */ (function (_super) {
    __extends(DcimSitesList200ApplicationJson, _super);
    function DcimSitesList200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=count" }),
        __metadata("design:type", Number)
    ], DcimSitesList200ApplicationJson.prototype, "count", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=next" }),
        __metadata("design:type", String)
    ], DcimSitesList200ApplicationJson.prototype, "next", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=previous" }),
        __metadata("design:type", String)
    ], DcimSitesList200ApplicationJson.prototype, "previous", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=results", elemType: shared.Site }),
        __metadata("design:type", Array)
    ], DcimSitesList200ApplicationJson.prototype, "results", void 0);
    return DcimSitesList200ApplicationJson;
}(SpeakeasyBase));
export { DcimSitesList200ApplicationJson };
var DcimSitesListRequest = /** @class */ (function (_super) {
    __extends(DcimSitesListRequest, _super);
    function DcimSitesListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DcimSitesListQueryParams)
    ], DcimSitesListRequest.prototype, "queryParams", void 0);
    return DcimSitesListRequest;
}(SpeakeasyBase));
export { DcimSitesListRequest };
var DcimSitesListResponse = /** @class */ (function (_super) {
    __extends(DcimSitesListResponse, _super);
    function DcimSitesListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DcimSitesListResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DcimSitesListResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DcimSitesList200ApplicationJson)
    ], DcimSitesListResponse.prototype, "dcimSitesList200ApplicationJsonObject", void 0);
    return DcimSitesListResponse;
}(SpeakeasyBase));
export { DcimSitesListResponse };
