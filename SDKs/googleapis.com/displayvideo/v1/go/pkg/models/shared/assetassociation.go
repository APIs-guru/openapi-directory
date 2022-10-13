package shared

type AssetAssociationRoleEnum string

const (
	AssetAssociationRoleEnumAssetRoleUnspecified    AssetAssociationRoleEnum = "ASSET_ROLE_UNSPECIFIED"
	AssetAssociationRoleEnumAssetRoleMain           AssetAssociationRoleEnum = "ASSET_ROLE_MAIN"
	AssetAssociationRoleEnumAssetRoleBackup         AssetAssociationRoleEnum = "ASSET_ROLE_BACKUP"
	AssetAssociationRoleEnumAssetRolePoliteLoad     AssetAssociationRoleEnum = "ASSET_ROLE_POLITE_LOAD"
	AssetAssociationRoleEnumAssetRoleHeadline       AssetAssociationRoleEnum = "ASSET_ROLE_HEADLINE"
	AssetAssociationRoleEnumAssetRoleLongHeadline   AssetAssociationRoleEnum = "ASSET_ROLE_LONG_HEADLINE"
	AssetAssociationRoleEnumAssetRoleBody           AssetAssociationRoleEnum = "ASSET_ROLE_BODY"
	AssetAssociationRoleEnumAssetRoleLongBody       AssetAssociationRoleEnum = "ASSET_ROLE_LONG_BODY"
	AssetAssociationRoleEnumAssetRoleCaptionURL     AssetAssociationRoleEnum = "ASSET_ROLE_CAPTION_URL"
	AssetAssociationRoleEnumAssetRoleCallToAction   AssetAssociationRoleEnum = "ASSET_ROLE_CALL_TO_ACTION"
	AssetAssociationRoleEnumAssetRoleAdvertiserName AssetAssociationRoleEnum = "ASSET_ROLE_ADVERTISER_NAME"
	AssetAssociationRoleEnumAssetRolePrice          AssetAssociationRoleEnum = "ASSET_ROLE_PRICE"
	AssetAssociationRoleEnumAssetRoleAndroidAppID   AssetAssociationRoleEnum = "ASSET_ROLE_ANDROID_APP_ID"
	AssetAssociationRoleEnumAssetRoleIosAppID       AssetAssociationRoleEnum = "ASSET_ROLE_IOS_APP_ID"
	AssetAssociationRoleEnumAssetRoleRating         AssetAssociationRoleEnum = "ASSET_ROLE_RATING"
	AssetAssociationRoleEnumAssetRoleIcon           AssetAssociationRoleEnum = "ASSET_ROLE_ICON"
	AssetAssociationRoleEnumAssetRoleCoverImage     AssetAssociationRoleEnum = "ASSET_ROLE_COVER_IMAGE"
)

type AssetAssociation struct {
	Asset *Asset                    `json:"asset"`
	Role  *AssetAssociationRoleEnum `json:"role"`
}
