package operations

import (
"openapi/pkg/models/shared")


type SearchCseSiterestrictListImgColorTypeEnum string

const (
    SearchCseSiterestrictListImgColorTypeEnumImgColorTypeUndefined SearchCseSiterestrictListImgColorTypeEnum = "imgColorTypeUndefined"
SearchCseSiterestrictListImgColorTypeEnumMono SearchCseSiterestrictListImgColorTypeEnum = "mono"
SearchCseSiterestrictListImgColorTypeEnumGray SearchCseSiterestrictListImgColorTypeEnum = "gray"
SearchCseSiterestrictListImgColorTypeEnumColor SearchCseSiterestrictListImgColorTypeEnum = "color"
SearchCseSiterestrictListImgColorTypeEnumTrans SearchCseSiterestrictListImgColorTypeEnum = "trans"
)



type SearchCseSiterestrictListImgDominantColorEnum string

const (
    SearchCseSiterestrictListImgDominantColorEnumImgDominantColorUndefined SearchCseSiterestrictListImgDominantColorEnum = "imgDominantColorUndefined"
SearchCseSiterestrictListImgDominantColorEnumBlack SearchCseSiterestrictListImgDominantColorEnum = "black"
SearchCseSiterestrictListImgDominantColorEnumBlue SearchCseSiterestrictListImgDominantColorEnum = "blue"
SearchCseSiterestrictListImgDominantColorEnumBrown SearchCseSiterestrictListImgDominantColorEnum = "brown"
SearchCseSiterestrictListImgDominantColorEnumGray SearchCseSiterestrictListImgDominantColorEnum = "gray"
SearchCseSiterestrictListImgDominantColorEnumGreen SearchCseSiterestrictListImgDominantColorEnum = "green"
SearchCseSiterestrictListImgDominantColorEnumOrange SearchCseSiterestrictListImgDominantColorEnum = "orange"
SearchCseSiterestrictListImgDominantColorEnumPink SearchCseSiterestrictListImgDominantColorEnum = "pink"
SearchCseSiterestrictListImgDominantColorEnumPurple SearchCseSiterestrictListImgDominantColorEnum = "purple"
SearchCseSiterestrictListImgDominantColorEnumRed SearchCseSiterestrictListImgDominantColorEnum = "red"
SearchCseSiterestrictListImgDominantColorEnumTeal SearchCseSiterestrictListImgDominantColorEnum = "teal"
SearchCseSiterestrictListImgDominantColorEnumWhite SearchCseSiterestrictListImgDominantColorEnum = "white"
SearchCseSiterestrictListImgDominantColorEnumYellow SearchCseSiterestrictListImgDominantColorEnum = "yellow"
)



type SearchCseSiterestrictListImgSizeEnum string

const (
    SearchCseSiterestrictListImgSizeEnumImgSizeUndefined SearchCseSiterestrictListImgSizeEnum = "imgSizeUndefined"
SearchCseSiterestrictListImgSizeEnumHuge SearchCseSiterestrictListImgSizeEnum = "HUGE"
SearchCseSiterestrictListImgSizeEnumIcon SearchCseSiterestrictListImgSizeEnum = "ICON"
SearchCseSiterestrictListImgSizeEnumLarge SearchCseSiterestrictListImgSizeEnum = "LARGE"
SearchCseSiterestrictListImgSizeEnumMedium SearchCseSiterestrictListImgSizeEnum = "MEDIUM"
SearchCseSiterestrictListImgSizeEnumSmall SearchCseSiterestrictListImgSizeEnum = "SMALL"
SearchCseSiterestrictListImgSizeEnumXlarge SearchCseSiterestrictListImgSizeEnum = "XLARGE"
SearchCseSiterestrictListImgSizeEnumXxlarge SearchCseSiterestrictListImgSizeEnum = "XXLARGE"
)



type SearchCseSiterestrictListImgTypeEnum string

const (
    SearchCseSiterestrictListImgTypeEnumImgTypeUndefined SearchCseSiterestrictListImgTypeEnum = "imgTypeUndefined"
SearchCseSiterestrictListImgTypeEnumClipart SearchCseSiterestrictListImgTypeEnum = "clipart"
SearchCseSiterestrictListImgTypeEnumFace SearchCseSiterestrictListImgTypeEnum = "face"
SearchCseSiterestrictListImgTypeEnumLineart SearchCseSiterestrictListImgTypeEnum = "lineart"
SearchCseSiterestrictListImgTypeEnumStock SearchCseSiterestrictListImgTypeEnum = "stock"
SearchCseSiterestrictListImgTypeEnumPhoto SearchCseSiterestrictListImgTypeEnum = "photo"
SearchCseSiterestrictListImgTypeEnumAnimated SearchCseSiterestrictListImgTypeEnum = "animated"
)



type SearchCseSiterestrictListSafeEnum string

const (
    SearchCseSiterestrictListSafeEnumSafeUndefined SearchCseSiterestrictListSafeEnum = "safeUndefined"
SearchCseSiterestrictListSafeEnumActive SearchCseSiterestrictListSafeEnum = "active"
SearchCseSiterestrictListSafeEnumHigh SearchCseSiterestrictListSafeEnum = "high"
SearchCseSiterestrictListSafeEnumMedium SearchCseSiterestrictListSafeEnum = "medium"
SearchCseSiterestrictListSafeEnumOff SearchCseSiterestrictListSafeEnum = "off"
)



type SearchCseSiterestrictListSearchTypeEnum string

const (
    SearchCseSiterestrictListSearchTypeEnumSearchTypeUndefined SearchCseSiterestrictListSearchTypeEnum = "searchTypeUndefined"
SearchCseSiterestrictListSearchTypeEnumImage SearchCseSiterestrictListSearchTypeEnum = "image"
)



type SearchCseSiterestrictListSiteSearchFilterEnum string

const (
    SearchCseSiterestrictListSiteSearchFilterEnumSiteSearchFilterUndefined SearchCseSiterestrictListSiteSearchFilterEnum = "siteSearchFilterUndefined"
SearchCseSiterestrictListSiteSearchFilterEnumE SearchCseSiterestrictListSiteSearchFilterEnum = "e"
SearchCseSiterestrictListSiteSearchFilterEnumI SearchCseSiterestrictListSiteSearchFilterEnum = "i"
)


type SearchCseSiterestrictListQueryParams struct {
    DollarXgafv *shared.XgafvEnum `queryParam:"style=form,explode=true,name=$.xgafv"`
    AccessToken *string `queryParam:"style=form,explode=true,name=access_token"`
    Alt *shared.AltEnum `queryParam:"style=form,explode=true,name=alt"`
    C2coff *string `queryParam:"style=form,explode=true,name=c2coff"`
    Callback *string `queryParam:"style=form,explode=true,name=callback"`
    Cr *string `queryParam:"style=form,explode=true,name=cr"`
    Cx *string `queryParam:"style=form,explode=true,name=cx"`
    DateRestrict *string `queryParam:"style=form,explode=true,name=dateRestrict"`
    ExactTerms *string `queryParam:"style=form,explode=true,name=exactTerms"`
    ExcludeTerms *string `queryParam:"style=form,explode=true,name=excludeTerms"`
    Fields *string `queryParam:"style=form,explode=true,name=fields"`
    FileType *string `queryParam:"style=form,explode=true,name=fileType"`
    Filter *string `queryParam:"style=form,explode=true,name=filter"`
    Gl *string `queryParam:"style=form,explode=true,name=gl"`
    Googlehost *string `queryParam:"style=form,explode=true,name=googlehost"`
    HighRange *string `queryParam:"style=form,explode=true,name=highRange"`
    Hl *string `queryParam:"style=form,explode=true,name=hl"`
    Hq *string `queryParam:"style=form,explode=true,name=hq"`
    ImgColorType *SearchCseSiterestrictListImgColorTypeEnum `queryParam:"style=form,explode=true,name=imgColorType"`
    ImgDominantColor *SearchCseSiterestrictListImgDominantColorEnum `queryParam:"style=form,explode=true,name=imgDominantColor"`
    ImgSize *SearchCseSiterestrictListImgSizeEnum `queryParam:"style=form,explode=true,name=imgSize"`
    ImgType *SearchCseSiterestrictListImgTypeEnum `queryParam:"style=form,explode=true,name=imgType"`
    Key *string `queryParam:"style=form,explode=true,name=key"`
    LinkSite *string `queryParam:"style=form,explode=true,name=linkSite"`
    LowRange *string `queryParam:"style=form,explode=true,name=lowRange"`
    Lr *string `queryParam:"style=form,explode=true,name=lr"`
    Num *int64 `queryParam:"style=form,explode=true,name=num"`
    OauthToken *string `queryParam:"style=form,explode=true,name=oauth_token"`
    OrTerms *string `queryParam:"style=form,explode=true,name=orTerms"`
    PrettyPrint *bool `queryParam:"style=form,explode=true,name=prettyPrint"`
    Q *string `queryParam:"style=form,explode=true,name=q"`
    QuotaUser *string `queryParam:"style=form,explode=true,name=quotaUser"`
    RelatedSite *string `queryParam:"style=form,explode=true,name=relatedSite"`
    Rights *string `queryParam:"style=form,explode=true,name=rights"`
    Safe *SearchCseSiterestrictListSafeEnum `queryParam:"style=form,explode=true,name=safe"`
    SearchType *SearchCseSiterestrictListSearchTypeEnum `queryParam:"style=form,explode=true,name=searchType"`
    SiteSearch *string `queryParam:"style=form,explode=true,name=siteSearch"`
    SiteSearchFilter *SearchCseSiterestrictListSiteSearchFilterEnum `queryParam:"style=form,explode=true,name=siteSearchFilter"`
    Sort *string `queryParam:"style=form,explode=true,name=sort"`
    Start *int64 `queryParam:"style=form,explode=true,name=start"`
    UploadType *string `queryParam:"style=form,explode=true,name=uploadType"`
    UploadProtocol *string `queryParam:"style=form,explode=true,name=upload_protocol"`
    
}

type SearchCseSiterestrictListRequest struct {
    QueryParams SearchCseSiterestrictListQueryParams 
    
}

type SearchCseSiterestrictListResponse struct {
    ContentType string 
    Search *shared.Search 
    StatusCode int64 
    
}

