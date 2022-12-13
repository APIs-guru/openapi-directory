import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// EmployeeCreateRequestEmploymentEmploymentDates
/** 
 * Employee employment dates
**/
export class EmployeeCreateRequestEmploymentEmploymentDates extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=full_time_start" })
  fullTimeStart?: string;

  @SpeakeasyMetadata({ data: "json, name=hire_date" })
  hireDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=rehire" })
  rehire?: string;

  @SpeakeasyMetadata({ data: "json, name=retirement" })
  retirement?: string;

  @SpeakeasyMetadata({ data: "json, name=terminated" })
  terminated?: string;
}

export enum EmployeeCreateRequestEmploymentEmploymentStatusEnum {
    Contract = "contract",
    Disabled = "disabled",
    FullTime = "full-time",
    PartTime = "part-time",
    Retired = "retired",
    Terminated = "terminated"
}

export enum EmployeeCreateRequestEmploymentSalaryTypeEnum {
    Hourly = "hourly",
    Salary = "salary"
}

export enum EmployeeCreateRequestEmploymentSalaryUnitEnum {
    Annual = "annual",
    Hour = "hour",
    Month = "month",
    SemiMonthly = "semi-monthly",
    Week = "week"
}


// EmployeeCreateRequestEmploymentSalary
/** 
 * Employee salary information
**/
export class EmployeeCreateRequestEmploymentSalary extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=amount" })
  amount?: number;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: EmployeeCreateRequestEmploymentSalaryTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=unit" })
  unit?: EmployeeCreateRequestEmploymentSalaryUnitEnum;
}


// EmployeeCreateRequestEmployment
/** 
 * Employment information for the employee
**/
export class EmployeeCreateRequestEmployment extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=employment_dates" })
  employmentDates?: EmployeeCreateRequestEmploymentEmploymentDates;

  @SpeakeasyMetadata({ data: "json, name=employment_status" })
  employmentStatus?: EmployeeCreateRequestEmploymentEmploymentStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=hours_worked" })
  hoursWorked?: number;

  @SpeakeasyMetadata({ data: "json, name=occupation" })
  occupation?: string;

  @SpeakeasyMetadata({ data: "json, name=salary" })
  salary?: EmployeeCreateRequestEmploymentSalary;
}

export enum EmployeeCreateRequestPersonContactEmailAddressTypeEnum {
    Home = "home",
    Work = "work"
}

export enum EmployeeCreateRequestPersonContactPreferredMethodEnum {
    Email = "email",
    HomePhone = "home-phone",
    Mail = "mail",
    Other = "other",
    WorkPhone = "work-phone"
}


// EmployeeCreateRequestPersonContact
/** 
 * Contact information for the person
**/
export class EmployeeCreateRequestPersonContact extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=email_address" })
  emailAddress?: string;

  @SpeakeasyMetadata({ data: "json, name=email_address_type" })
  emailAddressType?: EmployeeCreateRequestPersonContactEmailAddressTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=home_phone" })
  homePhone?: string;

  @SpeakeasyMetadata({ data: "json, name=preferred_language" })
  preferredLanguage?: string;

  @SpeakeasyMetadata({ data: "json, name=preferred_method" })
  preferredMethod?: EmployeeCreateRequestPersonContactPreferredMethodEnum;

  @SpeakeasyMetadata({ data: "json, name=speaks_english" })
  speaksEnglish?: boolean;

  @SpeakeasyMetadata({ data: "json, name=work_phone" })
  workPhone?: string;
}

export enum EmployeeCreateRequestPersonDetailsAmericanIndianStateEnum {
    Ak = "AK",
    Al = "AL",
    Ar = "AR",
    As = "AS",
    Az = "AZ",
    Ca = "CA",
    Co = "CO",
    Ct = "CT",
    Dc = "DC",
    De = "DE",
    Fl = "FL",
    Fm = "FM",
    Ga = "GA",
    Gu = "GU",
    Hi = "HI",
    Ia = "IA",
    Id = "ID",
    Il = "IL",
    In = "IN",
    Ks = "KS",
    Ky = "KY",
    La = "LA",
    Ma = "MA",
    Md = "MD",
    Me = "ME",
    Mh = "MH",
    Mi = "MI",
    Mn = "MN",
    Mo = "MO",
    Mp = "MP",
    Ms = "MS",
    Mt = "MT",
    Nc = "NC",
    Nd = "ND",
    Ne = "NE",
    Nh = "NH",
    Nj = "NJ",
    Nm = "NM",
    Nv = "NV",
    Ny = "NY",
    Oh = "OH",
    Ok = "OK",
    Or = "OR",
    Pa = "PA",
    Pr = "PR",
    Pw = "PW",
    Ri = "RI",
    Sc = "SC",
    Sd = "SD",
    Tn = "TN",
    Tx = "TX",
    Um = "UM",
    Ut = "UT",
    Va = "VA",
    Vi = "VI",
    Vt = "VT",
    Wa = "WA",
    Wi = "WI",
    Wv = "WV",
    Wy = "WY"
}


// EmployeeCreateRequestPersonDetailsAmericanIndian
/** 
 * American Indian status details (if applicable)
**/
export class EmployeeCreateRequestPersonDetailsAmericanIndian extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=state" })
  state?: EmployeeCreateRequestPersonDetailsAmericanIndianStateEnum;

  @SpeakeasyMetadata({ data: "json, name=tribe" })
  tribe?: string;
}


// EmployeeCreateRequestPersonDetailsDisability
/** 
 * Disability details (if applicable)
**/
export class EmployeeCreateRequestPersonDetailsDisability extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=communication" })
  communication?: boolean;

  @SpeakeasyMetadata({ data: "json, name=disabled" })
  disabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=reason" })
  reason?: string;
}

export enum EmployeeCreateRequestPersonDetailsTobaccoTypesEnum {
    ChewingTobacco = "chewing-tobacco",
    Cigarettes = "cigarettes",
    Pipe = "pipe"
}


// EmployeeCreateRequestPersonDetailsTobacco
/** 
 * Tobacco usage details (if applicable)
**/
export class EmployeeCreateRequestPersonDetailsTobacco extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=duration" })
  duration?: string;

  @SpeakeasyMetadata({ data: "json, name=frequency" })
  frequency?: string;

  @SpeakeasyMetadata({ data: "json, name=types" })
  types?: EmployeeCreateRequestPersonDetailsTobaccoTypesEnum[];

  @SpeakeasyMetadata({ data: "json, name=user" })
  user?: boolean;
}


// EmployeeCreateRequestPersonDetails
/** 
 * Additional personal details of the person
**/
export class EmployeeCreateRequestPersonDetails extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=american_indian" })
  americanIndian?: EmployeeCreateRequestPersonDetailsAmericanIndian;

  @SpeakeasyMetadata({ data: "json, name=disability" })
  disability?: EmployeeCreateRequestPersonDetailsDisability;

  @SpeakeasyMetadata({ data: "json, name=is_military" })
  isMilitary?: boolean;

  @SpeakeasyMetadata({ data: "json, name=is_student" })
  isStudent?: boolean;

  @SpeakeasyMetadata({ data: "json, name=tobacco" })
  tobacco?: EmployeeCreateRequestPersonDetailsTobacco;
}

export enum EmployeeCreateRequestPersonHomeAddressStateEnum {
    Ak = "AK",
    Al = "AL",
    Ar = "AR",
    As = "AS",
    Az = "AZ",
    Ca = "CA",
    Co = "CO",
    Ct = "CT",
    Dc = "DC",
    De = "DE",
    Fl = "FL",
    Fm = "FM",
    Ga = "GA",
    Gu = "GU",
    Hi = "HI",
    Ia = "IA",
    Id = "ID",
    Il = "IL",
    In = "IN",
    Ks = "KS",
    Ky = "KY",
    La = "LA",
    Ma = "MA",
    Md = "MD",
    Me = "ME",
    Mh = "MH",
    Mi = "MI",
    Mn = "MN",
    Mo = "MO",
    Mp = "MP",
    Ms = "MS",
    Mt = "MT",
    Nc = "NC",
    Nd = "ND",
    Ne = "NE",
    Nh = "NH",
    Nj = "NJ",
    Nm = "NM",
    Nv = "NV",
    Ny = "NY",
    Oh = "OH",
    Ok = "OK",
    Or = "OR",
    Pa = "PA",
    Pr = "PR",
    Pw = "PW",
    Ri = "RI",
    Sc = "SC",
    Sd = "SD",
    Tn = "TN",
    Tx = "TX",
    Um = "UM",
    Ut = "UT",
    Va = "VA",
    Vi = "VI",
    Vt = "VT",
    Wa = "WA",
    Wi = "WI",
    Wv = "WV",
    Wy = "WY"
}


// EmployeeCreateRequestPersonHomeAddress
/** 
 * Home address of the person
**/
export class EmployeeCreateRequestPersonHomeAddress extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=city" })
  city: string;

  @SpeakeasyMetadata({ data: "json, name=county" })
  county?: string;

  @SpeakeasyMetadata({ data: "json, name=state" })
  state: EmployeeCreateRequestPersonHomeAddressStateEnum;

  @SpeakeasyMetadata({ data: "json, name=street_one" })
  streetOne: string;

  @SpeakeasyMetadata({ data: "json, name=street_two" })
  streetTwo?: string;

  @SpeakeasyMetadata({ data: "json, name=zip_code" })
  zipCode: string;
}

export enum EmployeeCreateRequestPersonMailingAddressStateEnum {
    Ak = "AK",
    Al = "AL",
    Ar = "AR",
    As = "AS",
    Az = "AZ",
    Ca = "CA",
    Co = "CO",
    Ct = "CT",
    Dc = "DC",
    De = "DE",
    Fl = "FL",
    Fm = "FM",
    Ga = "GA",
    Gu = "GU",
    Hi = "HI",
    Ia = "IA",
    Id = "ID",
    Il = "IL",
    In = "IN",
    Ks = "KS",
    Ky = "KY",
    La = "LA",
    Ma = "MA",
    Md = "MD",
    Me = "ME",
    Mh = "MH",
    Mi = "MI",
    Mn = "MN",
    Mo = "MO",
    Mp = "MP",
    Ms = "MS",
    Mt = "MT",
    Nc = "NC",
    Nd = "ND",
    Ne = "NE",
    Nh = "NH",
    Nj = "NJ",
    Nm = "NM",
    Nv = "NV",
    Ny = "NY",
    Oh = "OH",
    Ok = "OK",
    Or = "OR",
    Pa = "PA",
    Pr = "PR",
    Pw = "PW",
    Ri = "RI",
    Sc = "SC",
    Sd = "SD",
    Tn = "TN",
    Tx = "TX",
    Um = "UM",
    Ut = "UT",
    Va = "VA",
    Vi = "VI",
    Vt = "VT",
    Wa = "WA",
    Wi = "WI",
    Wv = "WV",
    Wy = "WY"
}


// EmployeeCreateRequestPersonMailingAddress
/** 
 * Mailing address of the person
**/
export class EmployeeCreateRequestPersonMailingAddress extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=city" })
  city: string;

  @SpeakeasyMetadata({ data: "json, name=county" })
  county?: string;

  @SpeakeasyMetadata({ data: "json, name=state" })
  state: EmployeeCreateRequestPersonMailingAddressStateEnum;

  @SpeakeasyMetadata({ data: "json, name=street_one" })
  streetOne: string;

  @SpeakeasyMetadata({ data: "json, name=street_two" })
  streetTwo?: string;

  @SpeakeasyMetadata({ data: "json, name=zip_code" })
  zipCode: string;
}

export enum EmployeeCreateRequestPersonMaritalStatusEnum {
    Divorced = "divorced",
    DomesticPartner = "domestic-partner",
    LegallySeparated = "legally-separated",
    Married = "married",
    Single = "single",
    Widowed = "widowed"
}

export enum EmployeeCreateRequestPersonSexEnum {
    F = "F",
    M = "M",
    U = "U",
    X = "X"
}


// EmployeeCreateRequestPerson
/** 
 * Personal information for the employee
**/
export class EmployeeCreateRequestPerson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=contact" })
  contact?: EmployeeCreateRequestPersonContact;

  @SpeakeasyMetadata({ data: "json, name=date_of_birth" })
  dateOfBirth: Date;

  @SpeakeasyMetadata({ data: "json, name=details" })
  details?: EmployeeCreateRequestPersonDetails;

  @SpeakeasyMetadata({ data: "json, name=first_name" })
  firstName: string;

  @SpeakeasyMetadata({ data: "json, name=home_address" })
  homeAddress?: EmployeeCreateRequestPersonHomeAddress;

  @SpeakeasyMetadata({ data: "json, name=last_name" })
  lastName: string;

  @SpeakeasyMetadata({ data: "json, name=mailing_address" })
  mailingAddress?: EmployeeCreateRequestPersonMailingAddress;

  @SpeakeasyMetadata({ data: "json, name=marital_status" })
  maritalStatus?: EmployeeCreateRequestPersonMaritalStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=middle_name" })
  middleName?: string;

  @SpeakeasyMetadata({ data: "json, name=sex" })
  sex: EmployeeCreateRequestPersonSexEnum;

  @SpeakeasyMetadata({ data: "json, name=ssn" })
  ssn?: string;

  @SpeakeasyMetadata({ data: "json, name=suffix" })
  suffix?: string;
}


export class EmployeeCreateRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=employment" })
  employment?: EmployeeCreateRequestEmployment;

  @SpeakeasyMetadata({ data: "json, name=person" })
  person: EmployeeCreateRequestPerson;
}
