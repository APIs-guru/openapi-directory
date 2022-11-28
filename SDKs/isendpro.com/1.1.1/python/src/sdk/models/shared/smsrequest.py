from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class SmsRequestGmtZoneEnum(str, Enum):
    PACIFIC_MIDWAY = "Pacific/Midway"
    AMERICA_ADAK = "America/Adak"
    ETC_GMT_PLUS_10 = "Etc/GMT+10"
    PACIFIC_MARQUESAS = "Pacific/Marquesas"
    PACIFIC_GAMBIER = "Pacific/Gambier"
    AMERICA_ANCHORAGE = "America/Anchorage"
    AMERICA_ENSENADA = "America/Ensenada"
    ETC_GMT_PLUS_8 = "Etc/GMT+8"
    AMERICA_LOS_ANGELES = "America/Los_Angeles"
    AMERICA_DENVER = "America/Denver"
    AMERICA_CHIHUAHUA = "America/Chihuahua"
    AMERICA_DAWSON_CREEK = "America/Dawson_Creek"
    AMERICA_BELIZE = "America/Belize"
    AMERICA_CANCUN = "America/Cancun"
    CHILE_EASTER_ISLAND = "Chile/EasterIsland"
    AMERICA_CHICAGO = "America/Chicago"
    AMERICA_NEW_YORK = "America/New_York"
    AMERICA_HAVANA = "America/Havana"
    AMERICA_BOGOTA = "America/Bogota"
    AMERICA_CARACAS = "America/Caracas"
    AMERICA_SANTIAGO = "America/Santiago"
    AMERICA_LA_PAZ = "America/La_Paz"
    ATLANTIC_STANLEY = "Atlantic/Stanley"
    AMERICA_CAMPO_GRANDE = "America/Campo_Grande"
    AMERICA_GOOSE_BAY = "America/Goose_Bay"
    AMERICA_GLACE_BAY = "America/Glace_Bay"
    AMERICA_ST_JOHNS = "America/St_Johns"
    AMERICA_ARAGUAINA = "America/Araguaina"
    AMERICA_MONTEVIDEO = "America/Montevideo"
    AMERICA_MIQUELON = "America/Miquelon"
    AMERICA_GODTHAB = "America/Godthab"
    AMERICA_ARGENTINA_BUENOS_AIRES = "America/Argentina/Buenos_Aires"
    AMERICA_SAO_PAULO = "America/Sao_Paulo"
    AMERICA_NORONHA = "America/Noronha"
    ATLANTIC_CAPE_VERDE = "Atlantic/Cape_Verde"
    ATLANTIC_AZORES = "Atlantic/Azores"
    EUROPE_BELFAST = "Europe/Belfast"
    EUROPE_DUBLIN = "Europe/Dublin"
    EUROPE_LISBON = "Europe/Lisbon"
    EUROPE_LONDON = "Europe/London"
    AFRICA_ABIDJAN = "Africa/Abidjan"
    EUROPE_AMSTERDAM = "Europe/Amsterdam"
    EUROPE_BELGRADE = "Europe/Belgrade"
    EUROPE_BRUSSELS = "Europe/Brussels"
    AFRICA_ALGIERS = "Africa/Algiers"
    AFRICA_WINDHOEK = "Africa/Windhoek"
    ASIA_BEIRUT = "Asia/Beirut"
    AFRICA_CAIRO = "Africa/Cairo"
    ASIA_GAZA = "Asia/Gaza"
    AFRICA_BLANTYRE = "Africa/Blantyre"
    ASIA_JERUSALEM = "Asia/Jerusalem"
    EUROPE_MINSK = "Europe/Minsk"
    ASIA_DAMASCUS = "Asia/Damascus"
    EUROPE_MOSCOW = "Europe/Moscow"
    AFRICA_ADDIS_ABABA = "Africa/Addis_Ababa"
    ASIA_TEHRAN = "Asia/Tehran"
    ASIA_DUBAI = "Asia/Dubai"
    ASIA_YEREVAN = "Asia/Yerevan"
    ASIA_KABUL = "Asia/Kabul"
    ASIA_YEKATERINBURG = "Asia/Yekaterinburg"
    ASIA_TASHKENT = "Asia/Tashkent"
    ASIA_KOLKATA = "Asia/Kolkata"
    ASIA_KATMANDU = "Asia/Katmandu"
    ASIA_DHAKA = "Asia/Dhaka"
    ASIA_NOVOSIBIRSK = "Asia/Novosibirsk"
    ASIA_RANGOON = "Asia/Rangoon"
    ASIA_BANGKOK = "Asia/Bangkok"
    ASIA_KRASNOYARSK = "Asia/Krasnoyarsk"
    ASIA_HONG_KONG = "Asia/Hong_Kong"
    ASIA_IRKUTSK = "Asia/Irkutsk"
    AUSTRALIA_PERTH = "Australia/Perth"
    AUSTRALIA_EUCLA = "Australia/Eucla"
    ASIA_TOKYO = "Asia/Tokyo"
    ASIA_SEOUL = "Asia/Seoul"
    ASIA_YAKUTSK = "Asia/Yakutsk"
    AUSTRALIA_ADELAIDE = "Australia/Adelaide"
    AUSTRALIA_DARWIN = "Australia/Darwin"
    AUSTRALIA_BRISBANE = "Australia/Brisbane"
    AUSTRALIA_HOBART = "Australia/Hobart"
    ASIA_VLADIVOSTOK = "Asia/Vladivostok"
    AUSTRALIA_LORD_HOWE = "Australia/Lord_Howe"
    ETC_GMT_11 = "Etc/GMT-11"
    ASIA_MAGADAN = "Asia/Magadan"
    PACIFIC_NORFOLK = "Pacific/Norfolk"
    ASIA_ANADYR = "Asia/Anadyr"
    PACIFIC_AUCKLAND = "Pacific/Auckland"
    ETC_GMT_12 = "Etc/GMT-12"
    PACIFIC_CHATHAM = "Pacific/Chatham"
    PACIFIC_TONGATAPU = "Pacific/Tongatapu"
    PACIFIC_KIRITIMATI = "Pacific/Kiritimati"

class SmsRequestNumAzurEnum(str, Enum):
    ONE = "1"


@dataclass_json
@dataclass
class SmsRequest:
    keyid: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('keyid') }})
    num: List[str] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('num') }})
    sms: List[str] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('sms') }})
    date_envoi: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('date_envoi') }})
    emetteur: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('emetteur') }})
    gmt_zone: Optional[SmsRequestGmtZoneEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('gmt_zone') }})
    nostop: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nostop') }})
    num_azur: Optional[SmsRequestNumAzurEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('numAzur') }})
    repertoire_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('repertoireId') }})
    smslong: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('smslong') }})
    tracker: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tracker') }})
    ucs2: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ucs2') }})
    
