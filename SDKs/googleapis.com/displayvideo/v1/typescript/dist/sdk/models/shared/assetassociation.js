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
import { Asset } from "./asset";
export var AssetAssociationRoleEnum;
(function (AssetAssociationRoleEnum) {
    AssetAssociationRoleEnum["AssetRoleUnspecified"] = "ASSET_ROLE_UNSPECIFIED";
    AssetAssociationRoleEnum["AssetRoleMain"] = "ASSET_ROLE_MAIN";
    AssetAssociationRoleEnum["AssetRoleBackup"] = "ASSET_ROLE_BACKUP";
    AssetAssociationRoleEnum["AssetRolePoliteLoad"] = "ASSET_ROLE_POLITE_LOAD";
    AssetAssociationRoleEnum["AssetRoleHeadline"] = "ASSET_ROLE_HEADLINE";
    AssetAssociationRoleEnum["AssetRoleLongHeadline"] = "ASSET_ROLE_LONG_HEADLINE";
    AssetAssociationRoleEnum["AssetRoleBody"] = "ASSET_ROLE_BODY";
    AssetAssociationRoleEnum["AssetRoleLongBody"] = "ASSET_ROLE_LONG_BODY";
    AssetAssociationRoleEnum["AssetRoleCaptionUrl"] = "ASSET_ROLE_CAPTION_URL";
    AssetAssociationRoleEnum["AssetRoleCallToAction"] = "ASSET_ROLE_CALL_TO_ACTION";
    AssetAssociationRoleEnum["AssetRoleAdvertiserName"] = "ASSET_ROLE_ADVERTISER_NAME";
    AssetAssociationRoleEnum["AssetRolePrice"] = "ASSET_ROLE_PRICE";
    AssetAssociationRoleEnum["AssetRoleAndroidAppId"] = "ASSET_ROLE_ANDROID_APP_ID";
    AssetAssociationRoleEnum["AssetRoleIosAppId"] = "ASSET_ROLE_IOS_APP_ID";
    AssetAssociationRoleEnum["AssetRoleRating"] = "ASSET_ROLE_RATING";
    AssetAssociationRoleEnum["AssetRoleIcon"] = "ASSET_ROLE_ICON";
    AssetAssociationRoleEnum["AssetRoleCoverImage"] = "ASSET_ROLE_COVER_IMAGE";
})(AssetAssociationRoleEnum || (AssetAssociationRoleEnum = {}));
// AssetAssociation
/**
 * Asset association for the creative.
**/
var AssetAssociation = /** @class */ (function (_super) {
    __extends(AssetAssociation, _super);
    function AssetAssociation() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=asset" }),
        __metadata("design:type", Asset)
    ], AssetAssociation.prototype, "asset", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=role" }),
        __metadata("design:type", String)
    ], AssetAssociation.prototype, "role", void 0);
    return AssetAssociation;
}(SpeakeasyBase));
export { AssetAssociation };
