import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// EmployeeEditRequestEmploymentEmploymentDates
/** 
 * Employee employment dates
**/
export class EmployeeEditRequestEmploymentEmploymentDates extends SpeakeasyBase {
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

export enum EmployeeEditRequestEmploymentEmploymentStatusEnum {
    Contract = "contract",
    Disabled = "disabled",
    FullTime = "full-time",
    PartTime = "part-time",
    Retired = "retired",
    Terminated = "terminated"
}

export enum EmployeeEditRequestEmploymentSalaryTypeEnum {
    Hourly = "hourly",
    Salary = "salary"
}

export enum EmployeeEditRequestEmploymentSalaryUnitEnum {
    Annual = "annual",
    Hour = "hour",
    Month = "month",
    SemiMonthly = "semi-monthly",
    Week = "week"
}


// EmployeeEditRequestEmploymentSalary
/** 
 * Employee salary information
**/
export class EmployeeEditRequestEmploymentSalary extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=amount" })
  amount?: number;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: EmployeeEditRequestEmploymentSalaryTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=unit" })
  unit?: EmployeeEditRequestEmploymentSalaryUnitEnum;
}


// EmployeeEditRequestEmployment
/** 
 * Employment information for the employee
**/
export class EmployeeEditRequestEmployment extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=employment_dates" })
  employmentDates?: EmployeeEditRequestEmploymentEmploymentDates;

  @SpeakeasyMetadata({ data: "json, name=employment_status" })
  employmentStatus?: EmployeeEditRequestEmploymentEmploymentStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=hours_worked" })
  hoursWorked?: number;

  @SpeakeasyMetadata({ data: "json, name=occupation" })
  occupation?: string;

  @SpeakeasyMetadata({ data: "json, name=salary" })
  salary?: EmployeeEditRequestEmploymentSalary;
}

export enum EmployeeEditRequestPersonContactEmailAddressTypeEnum {
    Home = "home",
    Work = "work"
}

export enum EmployeeEditRequestPersonContactPreferredMethodEnum {
    Email = "email",
    HomePhone = "home-phone",
    Mail = "mail",
    Other = "other",
    WorkPhone = "work-phone"
}


// EmployeeEditRequestPersonContact
/** 
 * Contact information for the person
**/
export class EmployeeEditRequestPersonContact extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=email_address" })
  emailAddress?: string;

  @SpeakeasyMetadata({ data: "json, name=email_address_type" })
  emailAddressType?: EmployeeEditRequestPersonContactEmailAddressTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=home_phone" })
  homePhone?: string;

  @SpeakeasyMetadata({ data: "json, name=preferred_language" })
  preferredLanguage?: string;

  @SpeakeasyMetadata({ data: "json, name=preferred_method" })
  preferredMethod?: EmployeeEditRequestPersonContactPreferredMethodEnum;

  @SpeakeasyMetadata({ data: "json, name=speaks_english" })
  speaksEnglish?: boolean;

  @SpeakeasyMetadata({ data: "json, name=work_phone" })
  workPhone?: string;
}

export enum EmployeeEditRequestPersonDetailsAmericanIndianStateEnum {
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


// EmployeeEditRequestPersonDetailsAmericanIndian
/** 
 * American Indian status details (if applicable)
**/
export class EmployeeEditRequestPersonDetailsAmericanIndian extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=state" })
  state?: EmployeeEditRequestPersonDetailsAmericanIndianStateEnum;

  @SpeakeasyMetadata({ data: "json, name=tribe" })
  tribe?: string;
}


// EmployeeEditRequestPersonDetailsDisability
/** 
 * Disability details (if applicable)
**/
export class EmployeeEditRequestPersonDetailsDisability extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=communication" })
  communication?: boolean;

  @SpeakeasyMetadata({ data: "json, name=disabled" })
  disabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=reason" })
  reason?: string;
}

export enum EmployeeEditRequestPersonDetailsTobaccoTypesEnum {
    ChewingTobacco = "chewing-tobacco",
    Cigarettes = "cigarettes",
    Pipe = "pipe"
}


// EmployeeEditRequestPersonDetailsTobacco
/** 
 * Tobacco usage details (if applicable)
**/
export class EmployeeEditRequestPersonDetailsTobacco extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=duration" })
  duration?: string;

  @SpeakeasyMetadata({ data: "json, name=frequency" })
  frequency?: string;

  @SpeakeasyMetadata({ data: "json, name=types" })
  types?: EmployeeEditRequestPersonDetailsTobaccoTypesEnum[];

  @SpeakeasyMetadata({ data: "json, name=user" })
  user?: boolean;
}


// EmployeeEditRequestPersonDetails
/** 
 * Additional personal details of the person
**/
export class EmployeeEditRequestPersonDetails extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=american_indian" })
  americanIndian?: EmployeeEditRequestPersonDetailsAmericanIndian;

  @SpeakeasyMetadata({ data: "json, name=disability" })
  disability?: EmployeeEditRequestPersonDetailsDisability;

  @SpeakeasyMetadata({ data: "json, name=is_military" })
  isMilitary?: boolean;

  @SpeakeasyMetadata({ data: "json, name=is_student" })
  isStudent?: boolean;

  @SpeakeasyMetadata({ data: "json, name=tobacco" })
  tobacco?: EmployeeEditRequestPersonDetailsTobacco;
}

export enum EmployeeEditRequestPersonHomeAddressStateEnum {
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


// EmployeeEditRequestPersonHomeAddress
/** 
 * Home address of the person
**/
export class EmployeeEditRequestPersonHomeAddress extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=city" })
  city: string;

  @SpeakeasyMetadata({ data: "json, name=county" })
  county?: string;

  @SpeakeasyMetadata({ data: "json, name=state" })
  state: EmployeeEditRequestPersonHomeAddressStateEnum;

  @SpeakeasyMetadata({ data: "json, name=street_one" })
  streetOne: string;

  @SpeakeasyMetadata({ data: "json, name=street_two" })
  streetTwo?: string;

  @SpeakeasyMetadata({ data: "json, name=zip_code" })
  zipCode: string;
}

export enum EmployeeEditRequestPersonMailingAddressStateEnum {
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


// EmployeeEditRequestPersonMailingAddress
/** 
 * Mailing address for the person
**/
export class EmployeeEditRequestPersonMailingAddress extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=city" })
  city: string;

  @SpeakeasyMetadata({ data: "json, name=county" })
  county?: string;

  @SpeakeasyMetadata({ data: "json, name=state" })
  state: EmployeeEditRequestPersonMailingAddressStateEnum;

  @SpeakeasyMetadata({ data: "json, name=street_one" })
  streetOne: string;

  @SpeakeasyMetadata({ data: "json, name=street_two" })
  streetTwo?: string;

  @SpeakeasyMetadata({ data: "json, name=zip_code" })
  zipCode: string;
}

export enum EmployeeEditRequestPersonMaritalStatusEnum {
    Divorced = "divorced",
    DomesticPartner = "domestic-partner",
    LegallySeparated = "legally-separated",
    Married = "married",
    Single = "single",
    Widowed = "widowed"
}

export enum EmployeeEditRequestPersonSexEnum {
    F = "F",
    M = "M",
    U = "U",
    X = "X"
}


// EmployeeEditRequestPerson
/** 
 * Personal information for the employee
**/
export class EmployeeEditRequestPerson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=contact" })
  contact?: EmployeeEditRequestPersonContact;

  @SpeakeasyMetadata({ data: "json, name=date_of_birth" })
  dateOfBirth?: Date;

  @SpeakeasyMetadata({ data: "json, name=details" })
  details?: EmployeeEditRequestPersonDetails;

  @SpeakeasyMetadata({ data: "json, name=first_name" })
  firstName?: string;

  @SpeakeasyMetadata({ data: "json, name=home_address" })
  homeAddress?: EmployeeEditRequestPersonHomeAddress;

  @SpeakeasyMetadata({ data: "json, name=last_name" })
  lastName?: string;

  @SpeakeasyMetadata({ data: "json, name=mailing_address" })
  mailingAddress?: EmployeeEditRequestPersonMailingAddress;

  @SpeakeasyMetadata({ data: "json, name=marital_status" })
  maritalStatus?: EmployeeEditRequestPersonMaritalStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=middle_name" })
  middleName?: string;

  @SpeakeasyMetadata({ data: "json, name=sex" })
  sex?: EmployeeEditRequestPersonSexEnum;

  @SpeakeasyMetadata({ data: "json, name=ssn" })
  ssn?: string;

  @SpeakeasyMetadata({ data: "json, name=suffix" })
  suffix?: string;
}


export class EmployeeEditRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=employment" })
  employment?: EmployeeEditRequestEmployment;

  @SpeakeasyMetadata({ data: "json, name=person" })
  person?: EmployeeEditRequestPerson;
}
