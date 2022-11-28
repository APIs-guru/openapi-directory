from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class VolumeAccessInfoEpub:
    r"""VolumeAccessInfoEpub
    Information about epub content. (In LITE projection.)
    """
    
    acs_token_link: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('acsTokenLink') }})
    download_link: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('downloadLink') }})
    is_available: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('isAvailable') }})
    

@dataclass_json
@dataclass
class VolumeAccessInfoPdf:
    r"""VolumeAccessInfoPdf
    Information about pdf content. (In LITE projection.)
    """
    
    acs_token_link: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('acsTokenLink') }})
    download_link: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('downloadLink') }})
    is_available: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('isAvailable') }})
    

@dataclass_json
@dataclass
class VolumeAccessInfo:
    r"""VolumeAccessInfo
    Any information about a volume related to reading or obtaining that volume text. This information can depend on country (books may be public domain in one country but not in another, e.g.).
    """
    
    access_view_status: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('accessViewStatus') }})
    country: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('country') }})
    download_access: Optional[DownloadAccessRestriction] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('downloadAccess') }})
    drive_imported_content_link: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('driveImportedContentLink') }})
    embeddable: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('embeddable') }})
    epub: Optional[VolumeAccessInfoEpub] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('epub') }})
    explicit_offline_license_management: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('explicitOfflineLicenseManagement') }})
    pdf: Optional[VolumeAccessInfoPdf] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pdf') }})
    public_domain: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('publicDomain') }})
    quote_sharing_allowed: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('quoteSharingAllowed') }})
    text_to_speech_permission: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('textToSpeechPermission') }})
    view_order_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('viewOrderUrl') }})
    viewability: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('viewability') }})
    web_reader_link: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('webReaderLink') }})
    

@dataclass_json
@dataclass
class VolumeLayerInfoLayers:
    layer_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('layerId') }})
    volume_annotations_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('volumeAnnotationsVersion') }})
    

@dataclass_json
@dataclass
class VolumeLayerInfo:
    r"""VolumeLayerInfo
    What layers exist in this volume and high level information about them.
    """
    
    layers: Optional[List[VolumeLayerInfoLayers]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('layers') }})
    

@dataclass_json
@dataclass
class VolumeRecommendedInfo:
    r"""VolumeRecommendedInfo
    Recommendation related information for this volume.
    """
    
    explanation: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('explanation') }})
    

@dataclass_json
@dataclass
class VolumeSaleInfoListPrice:
    r"""VolumeSaleInfoListPrice
    Suggested retail price. (In LITE projection.)
    """
    
    amount: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('amount') }})
    currency_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('currencyCode') }})
    

@dataclass_json
@dataclass
class VolumeSaleInfoOffersListPrice:
    r"""VolumeSaleInfoOffersListPrice
    Offer list (=undiscounted) price in Micros.
    """
    
    amount_in_micros: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('amountInMicros') }})
    currency_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('currencyCode') }})
    

@dataclass_json
@dataclass
class VolumeSaleInfoOffersRentalDuration:
    r"""VolumeSaleInfoOffersRentalDuration
    The rental duration (for rental offers only).
    """
    
    count: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('count') }})
    unit: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('unit') }})
    

@dataclass_json
@dataclass
class VolumeSaleInfoOffersRetailPrice:
    r"""VolumeSaleInfoOffersRetailPrice
    Offer retail (=discounted) price in Micros
    """
    
    amount_in_micros: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('amountInMicros') }})
    currency_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('currencyCode') }})
    

@dataclass_json
@dataclass
class VolumeSaleInfoOffers:
    finsky_offer_type: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('finskyOfferType') }})
    giftable: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('giftable') }})
    list_price: Optional[VolumeSaleInfoOffersListPrice] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('listPrice') }})
    rental_duration: Optional[VolumeSaleInfoOffersRentalDuration] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rentalDuration') }})
    retail_price: Optional[VolumeSaleInfoOffersRetailPrice] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('retailPrice') }})
    

@dataclass_json
@dataclass
class VolumeSaleInfoRetailPrice:
    r"""VolumeSaleInfoRetailPrice
    The actual selling price of the book. This is the same as the suggested retail or list price unless there are offers or discounts on this volume. (In LITE projection.)
    """
    
    amount: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('amount') }})
    currency_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('currencyCode') }})
    

@dataclass_json
@dataclass
class VolumeSaleInfo:
    r"""VolumeSaleInfo
    Any information about a volume related to the eBookstore and/or purchaseability. This information can depend on the country where the request originates from (i.e. books may not be for sale in certain countries).
    """
    
    buy_link: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('buyLink') }})
    country: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('country') }})
    is_ebook: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('isEbook') }})
    list_price: Optional[VolumeSaleInfoListPrice] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('listPrice') }})
    offers: Optional[List[VolumeSaleInfoOffers]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('offers') }})
    on_sale_date: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('onSaleDate') }})
    retail_price: Optional[VolumeSaleInfoRetailPrice] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('retailPrice') }})
    saleability: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('saleability') }})
    

@dataclass_json
@dataclass
class VolumeSearchInfo:
    r"""VolumeSearchInfo
    Search result information related to this volume.
    """
    
    text_snippet: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('textSnippet') }})
    

@dataclass_json
@dataclass
class VolumeUserInfoCopy:
    r"""VolumeUserInfoCopy
    Copy/Paste accounting information.
    """
    
    allowed_character_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('allowedCharacterCount') }})
    limit_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('limitType') }})
    remaining_character_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('remainingCharacterCount') }})
    updated: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updated') }})
    

@dataclass_json
@dataclass
class VolumeUserInfoFamilySharing:
    r"""VolumeUserInfoFamilySharing
    Information on the ability to share with the family.
    """
    
    family_role: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('familyRole') }})
    is_sharing_allowed: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('isSharingAllowed') }})
    is_sharing_disabled_by_fop: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('isSharingDisabledByFop') }})
    

@dataclass_json
@dataclass
class VolumeUserInfoRentalPeriod:
    r"""VolumeUserInfoRentalPeriod
    Period during this book is/was a valid rental.
    """
    
    end_utc_sec: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('endUtcSec') }})
    start_utc_sec: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('startUtcSec') }})
    

@dataclass_json
@dataclass
class VolumeUserInfoUserUploadedVolumeInfo:
    processing_state: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('processingState') }})
    

@dataclass_json
@dataclass
class VolumeUserInfo:
    r"""VolumeUserInfo
    User specific information related to this volume. (e.g. page this user last read or whether they purchased this book)
    """
    
    acquired_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('acquiredTime') }})
    acquisition_type: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('acquisitionType') }})
    copy: Optional[VolumeUserInfoCopy] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('copy') }})
    entitlement_type: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('entitlementType') }})
    family_sharing: Optional[VolumeUserInfoFamilySharing] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('familySharing') }})
    is_family_shared_from_user: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('isFamilySharedFromUser') }})
    is_family_shared_to_user: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('isFamilySharedToUser') }})
    is_family_sharing_allowed: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('isFamilySharingAllowed') }})
    is_family_sharing_disabled_by_fop: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('isFamilySharingDisabledByFop') }})
    is_in_my_books: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('isInMyBooks') }})
    is_preordered: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('isPreordered') }})
    is_purchased: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('isPurchased') }})
    is_uploaded: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('isUploaded') }})
    reading_position: Optional[ReadingPosition] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('readingPosition') }})
    rental_period: Optional[VolumeUserInfoRentalPeriod] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rentalPeriod') }})
    rental_state: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rentalState') }})
    review: Optional[Review] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('review') }})
    updated: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updated') }})
    user_uploaded_volume_info: Optional[VolumeUserInfoUserUploadedVolumeInfo] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('userUploadedVolumeInfo') }})
    

@dataclass_json
@dataclass
class VolumeVolumeInfoDimensions:
    r"""VolumeVolumeInfoDimensions
    Physical dimensions of this volume.
    """
    
    height: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('height') }})
    thickness: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('thickness') }})
    width: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('width') }})
    

@dataclass_json
@dataclass
class VolumeVolumeInfoImageLinks:
    r"""VolumeVolumeInfoImageLinks
    A list of image links for all the sizes that are available. (In LITE projection.)
    """
    
    extra_large: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('extraLarge') }})
    large: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('large') }})
    medium: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('medium') }})
    small: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('small') }})
    small_thumbnail: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('smallThumbnail') }})
    thumbnail: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('thumbnail') }})
    

@dataclass_json
@dataclass
class VolumeVolumeInfoIndustryIdentifiers:
    identifier: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('identifier') }})
    type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    

@dataclass_json
@dataclass
class VolumeVolumeInfoPanelizationSummary:
    r"""VolumeVolumeInfoPanelizationSummary
    A top-level summary of the panelization info in this volume.
    """
    
    contains_epub_bubbles: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('containsEpubBubbles') }})
    contains_image_bubbles: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('containsImageBubbles') }})
    epub_bubble_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('epubBubbleVersion') }})
    image_bubble_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('imageBubbleVersion') }})
    

@dataclass_json
@dataclass
class VolumeVolumeInfoReadingModes:
    r"""VolumeVolumeInfoReadingModes
    The reading modes available for this volume.
    """
    
    image: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('image') }})
    text: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('text') }})
    

@dataclass_json
@dataclass
class VolumeVolumeInfo:
    r"""VolumeVolumeInfo
    General volume information.
    """
    
    allow_anon_logging: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('allowAnonLogging') }})
    authors: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('authors') }})
    average_rating: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('averageRating') }})
    canonical_volume_link: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('canonicalVolumeLink') }})
    categories: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('categories') }})
    comics_content: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('comicsContent') }})
    content_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('contentVersion') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    dimensions: Optional[VolumeVolumeInfoDimensions] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dimensions') }})
    image_links: Optional[VolumeVolumeInfoImageLinks] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('imageLinks') }})
    industry_identifiers: Optional[List[VolumeVolumeInfoIndustryIdentifiers]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('industryIdentifiers') }})
    info_link: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('infoLink') }})
    language: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('language') }})
    main_category: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('mainCategory') }})
    maturity_rating: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('maturityRating') }})
    page_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pageCount') }})
    panelization_summary: Optional[VolumeVolumeInfoPanelizationSummary] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('panelizationSummary') }})
    preview_link: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('previewLink') }})
    print_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('printType') }})
    printed_page_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('printedPageCount') }})
    published_date: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('publishedDate') }})
    publisher: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('publisher') }})
    ratings_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ratingsCount') }})
    reading_modes: Optional[VolumeVolumeInfoReadingModes] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('readingModes') }})
    sample_page_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('samplePageCount') }})
    series_info: Optional[Volumeseriesinfo] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('seriesInfo') }})
    subtitle: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('subtitle') }})
    title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('title') }})
    

@dataclass_json
@dataclass
class Volume:
    access_info: Optional[VolumeAccessInfo] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('accessInfo') }})
    etag: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('etag') }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kind') }})
    layer_info: Optional[VolumeLayerInfo] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('layerInfo') }})
    recommended_info: Optional[VolumeRecommendedInfo] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('recommendedInfo') }})
    sale_info: Optional[VolumeSaleInfo] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('saleInfo') }})
    search_info: Optional[VolumeSearchInfo] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('searchInfo') }})
    self_link: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('selfLink') }})
    user_info: Optional[VolumeUserInfo] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('userInfo') }})
    volume_info: Optional[VolumeVolumeInfo] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('volumeInfo') }})
    
